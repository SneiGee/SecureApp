using Microsoft.AspNetCore.Identity;

namespace Server.Entities.Identity
{
    public class AppRole : IdentityRole<int>
    {
        public ICollection<AppUserRole>? UserRoles { get; set; }
    }
}