using Microsoft.EntityFrameworkCore;
using Server.Entities;
using Server.Interfaces;

namespace Server.Data
{
    public class PrisonerRepository : IPrisonerRepository
    {
        private readonly StoreContext _context;
        public PrisonerRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<IReadOnlyList<Prisoner>> GetAllPrisoners()
        {
            return await _context.Prisoners
                .Include(b => b.Block)
                .ToListAsync();
        }

        public async Task<IReadOnlyList<Block>> GetPrisonBlock()
        {
            return await _context.Blocks.ToListAsync();
        }

        public async Task<Prisoner> GetPrisonerById(int id)
        {
            var getPrisonner = await _context.Prisoners
                .Include(b => b.Block)
                .FirstOrDefaultAsync(x => x.Id == id);

            return getPrisonner!;
        }
    }
}