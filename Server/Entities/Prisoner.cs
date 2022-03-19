namespace Server.Entities
{
    public class Prisoner : BaseEntity
    {
        public string InmateId { get; set; } = GenerateNewRandom();
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public string Race { get; set; } = string.Empty;
        public DateTime Created { get; set; } = DateTime.Now;
        public string Gender { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Height { get; set; } = string.Empty;
        public string Weight { get; set; } = string.Empty;
        public string EyeColor { get; set; } = string.Empty;
        public string HairColor { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Nationality { get; set; } = string.Empty;

        public Block Block { get; set; } = null!;
        public int BlockId { get; set; }

        public ICollection<PrisonPhoto> PrisonPhotos { get; set; } = null!;

        
        private static string GenerateNewRandom()
        {
            Random generator = new Random();
            String r = generator.Next(0, 1000000).ToString("D6");
            if (r.Distinct().Count() == 1)
            {
                r = GenerateNewRandom();
            }
            return r;
        }
    }
}