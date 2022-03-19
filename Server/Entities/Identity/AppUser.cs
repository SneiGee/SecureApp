using Microsoft.AspNetCore.Identity;
using Server.Extensions;

namespace Server.Entities.Identity
{
    public class AppUser : IdentityUser<int>
    {
        public string IdNumber { get; set; } = GenerateNewRandom();
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; } = string.Empty;
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public string Gender { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Interests { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Nationality { get; set; } = string.Empty;

        public ICollection<Photo> Photos { get; set; } = null!;
        public ICollection<AppUserRole> UserRoles { get; set; } = null!;

        
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

        // public int GetAge()
        // {
        //     return DateOfBirth.CalculateAge();
        // }
    }
}