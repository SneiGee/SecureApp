using Server.Entities;

namespace Server.Specifications
{
    public class PrisonersWithBlocks : BaseSpecification<Prisoner>
    {
        public PrisonersWithBlocks()
        {
            AddInclude(x => x.Block);
            AddOrderBy(x => x.Created);
            AddInclude(x => x.PrisonPhotos);
        }

        public PrisonersWithBlocks(string inmateid) : base(x => x.InmateId == inmateid)
        {
            AddInclude(x => x.Block);
            AddOrderBy(x => x.Created);
            AddInclude(x => x.PrisonPhotos);
        }
    }
}