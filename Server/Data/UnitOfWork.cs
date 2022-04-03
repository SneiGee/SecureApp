using AutoMapper;
using Server.Data.Identity;
using Server.Interfaces;

namespace Server.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IdentityContext _context;
        private readonly IMapper _mapper;
        public UnitOfWork(IdentityContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public IUserRepository UserRepository => new UserRepository(_context, _mapper);

        public async Task<bool> Complete()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public bool HasChanges()
        {
            _context.ChangeTracker.DetectChanges();
            var changes = _context.ChangeTracker.HasChanges();

            return changes;
        }
    }
}