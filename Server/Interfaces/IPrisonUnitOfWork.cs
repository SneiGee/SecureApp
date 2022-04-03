using Server.Entities;

namespace Server.Interfaces
{
    public interface IPrisonUnitOfWork : IDisposable
    {
         IGenericRepository<IEntity> Repository<IEntity>() where IEntity : BaseEntity;
         Task<int> complete();
    }
}