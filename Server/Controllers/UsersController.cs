using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data.Identity;
using Server.Dto;
using Server.Entities;

namespace Server.Controllers
{
    public class UsersController : BaseController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IdentityContext _context;
        public UsersController(UserManager<AppUser> userManager, IdentityContext context)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }
    }
}