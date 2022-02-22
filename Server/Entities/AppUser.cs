using Microsoft.AspNetCore.Identity;

namespace Server.Entities
{
    public class AppUser : IdentityUser
    {
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; } = string.Empty;
    }
}