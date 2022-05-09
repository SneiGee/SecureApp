using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Dto;
using Server.Entities;
using Server.Entities.Identity;
using Server.Interfaces;
using Server.Specifications;

namespace Server.Controllers
{
    public class AdminController : BaseController
    {
        private readonly IPrisonUnitOfWork _prisonUnitOfWork;
        private readonly IMapper _mapper;
        private readonly IPhotoService _photoService;
        private readonly UserManager<AppUser> _userManager;
        private readonly IUnitOfWork _unitOfWork;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        public AdminController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, 
            ITokenService tokenService, IUnitOfWork unitOfWork,
            IPrisonUnitOfWork prisonUnitOfWork, IMapper mapper, IPhotoService photoService)
        {
            _tokenService = tokenService;
            _signInManager = signInManager;
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _photoService = photoService;
            _mapper = mapper;
            _prisonUnitOfWork = prisonUnitOfWork;
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("users-with-roles")]
        public async Task<ActionResult> GetUsersWithRoles()
        {
            var users = await _userManager.Users
                .Include(r => r.UserRoles)
                .ThenInclude(r => r.Role)
                .OrderBy(u => u.UserName)
                .Select(s => new
                {
                    s.Id,
                    Username = s.UserName,
                    Roles = s.UserRoles.Select(r => r.Role!.Name).ToList()
                })
                .ToListAsync();
            
            return Ok(users);
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpPost("edit-roles/{username}")]
        public async Task<ActionResult> EditUserRoles(string username, [FromQuery] string roles)
        {
            var selectedRoles = roles.Split(",").ToArray();

            var user = await _userManager.FindByNameAsync(username);

            if (user == null) return NotFound("Could not find user");

            var userRoles = await _userManager.GetRolesAsync(user);

            var result = await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles));

            if (!result.Succeeded) return BadRequest("Failed to add to roles");

            result = await _userManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles));

            if (!result.Succeeded) return BadRequest("Failed to remove from roles");

            return Ok(await _userManager.GetRolesAsync(user));
        }
        
        [Authorize(Policy = "AllowAllRole")]
        [HttpGet("photos-to-moderate")]
        public ActionResult GetPhotosForModeration()
        {
            return Ok("Admins or moderators can see this");
        }

        [HttpGet("cell")]
        public async Task<ActionResult<IReadOnlyList<BlockDto>>> GetCellAsync()
        {
            return Ok(await _prisonUnitOfWork.Repository<Block>().ListAllAsync());
        }

        [HttpPost("create-cell")]
        public async Task<ActionResult<BlockDto>> CreateCellAsync(BlockCreateDto blockCreateDto)
        {
            var cell = _mapper.Map<BlockCreateDto, Block>(blockCreateDto);

            _prisonUnitOfWork.Repository<Block>().Add(cell);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Problem adding new prison cell");

            return Ok(cell);
        }

        [HttpPut("update-cell/{id}")]
        public async Task<ActionResult<BlockDto>> UpdateCellAsync(int id, BlockCreateDto blockUpdateDto)
        {
            var updateCell = await _prisonUnitOfWork.Repository<Block>().GetByIdAsync(id);

            _mapper.Map(blockUpdateDto, updateCell);

            _prisonUnitOfWork.Repository<Block>().Update(updateCell);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Problem updating cell!!");

            return Ok(updateCell);
        }

        [HttpDelete("delete-cell/{id}")]
        public async Task<ActionResult> DeleteCellAsync(int id)
        {
            var deleteCell = await _prisonUnitOfWork.Repository<Block>().GetByIdAsync(id);

            _prisonUnitOfWork.Repository<Block>().Delete(deleteCell);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Problem deleting cell");

            return Ok();
        }
    }
}