using System.Text.Json;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Server.Entities.Identity;

namespace Server.Data.Identity
{
    public class Seed
    {
        public static async Task SeedUsers(UserManager<AppUser> userManager, 
            RoleManager<AppRole> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("Data/Identity/SeedIdentity/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
            if (users == null) return;

            var roles = new List<AppRole>
            {
                new AppRole{Name = "Admin"},
                new AppRole{Name = "Guard"},
                new AppRole{Name = "Moderator"},
            };

            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }
            
            foreach (var user in users)
            {
                user.UserName = user.UserName.ToLower();
                await userManager.CreateAsync(user, "password");
                await userManager.AddToRoleAsync(user, "Guard");
            }

            var admin = new AppUser
            {
                UserName = "admin",
                Email = "admin@test.com",
                FirstName = "Bob",
                LastName = "Bobbity",
                Gender = "Male",
                City = "New York",
                Nationality = "USA",
                KnownAs = "Admin",
                Created = DateTime.Now,
                LastActive = DateTime.Now,
                Status = "Married",
                Interests = "Dolor aliquip velit amet aliqua minim quip cillum."
            };

            await userManager.CreateAsync(admin, "password");
            await userManager.AddToRolesAsync(admin, new[] {"Admin", "Moderator"});
            
            // await userManager.GetSecurityStampAsync(admin);
        }
    }
}