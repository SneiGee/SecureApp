using Server.Entities;

namespace Server.Interfaces
{
    public interface IPrisonerRepository
    {
         Task<Prisoner> GetPrisonerById(int id);
         Task<IReadOnlyList<Prisoner>> GetAllPrisoners();
         Task<IReadOnlyList<Block>> GetPrisonBlock();
    }
}