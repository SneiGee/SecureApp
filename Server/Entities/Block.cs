namespace Server.Entities
{
    public class Block : BaseEntity
    {
        public string IdNumber { get; set; } = GenerateNewRandom();
        public string Name { get; set; } = string.Empty;

        private static string GenerateNewRandom()
        {
            Random generator = new Random();
            String r = generator.Next(0, 1000).ToString("D4");
            if (r.Distinct().Count() == 1)
            {
                r = GenerateNewRandom();
            }
            return r;
        }
        
    }
}