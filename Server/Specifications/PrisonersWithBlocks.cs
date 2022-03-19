using Server.Entities;

namespace Server.Specifications
{
    public class PrisonersWithBlocks : BaseSpecification<Prisoner>
    {
        public PrisonersWithBlocks()
        {
            AddInclude(x => x.Block);
            AddInclude(x => x.PrisonPhotos);
            AddOrderBy(x => x.Created);
        }

        public PrisonersWithBlocks(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Block);
            AddInclude(x => x.PrisonPhotos);
            AddOrderBy(x => x.Created);
        }
    }
}