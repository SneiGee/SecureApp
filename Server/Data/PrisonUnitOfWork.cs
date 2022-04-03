using System.Collections;
using Server.Entities;
using Server.Interfaces;

namespace Server.Data
{
    public class PrisonUnitOfWork : IPrisonUnitOfWork
    {
        private readonly StoreContext _context;
        private Hashtable _repository = null!;
        public PrisonUnitOfWork(StoreContext context)
        {
            _context = context;
        }

        public async Task<int> complete()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IGenericRepository<IEntity> Repository<IEntity>() where IEntity : BaseEntity
        {
            if (_repository == null) _repository = new Hashtable();

            var type = typeof(IEntity).Name;

            if (!_repository.ContainsKey(type))
            {
                var repositoryType = typeof(GenericRepository<>);
                var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(IEntity)), _context);

                _repository.Add(type, repositoryInstance);
            }

            return (GenericRepository<IEntity>) _repository[type]!;
        }
    }
}