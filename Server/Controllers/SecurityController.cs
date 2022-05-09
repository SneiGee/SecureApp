using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Dto;
using Server.Entities.Identity;
using Server.Interfaces;

namespace Server.Controllers
{
    [Authorize(Policy = "RequireAdminRole")]
    public class SecurityController : BaseController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public SecurityController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager,
            ITokenService tokenService, IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;
        }

    [HttpPost("add-guard")]
    public async Task<ActionResult<UserDto>> AddGuardAsync(RegisterDto registerDto)
    {
        if (await CheckUsernameExists(registerDto.Username)) return BadRequest("Oops! Username already taken");

        var user = _mapper.Map<AppUser>(registerDto);

        user.UserName = registerDto.Username.ToLower();

        var result = await _userManager.CreateAsync(user, registerDto.Password);

        if (!result.Succeeded) return BadRequest(result.Errors);

        var roleResult = await _userManager.AddToRoleAsync(user, "Guard");

        if (!result.Succeeded) return BadRequest(result.Errors);

        return new UserDto
        {
            Username = user.UserName,
            Token = await _tokenService.CreateToken(user),
            // KnownAs = user.KnownAs,
            IdNumber = user.IdNumber,
            Gender = user.Gender
        };
    }

    [HttpPut("update-guard/{id}")]
    public async Task<ActionResult> UpdateGuardAsync(int id, MemberUpdateDto memberUpdateDto)
    {
        var guard = await _unitOfWork.UserRepository.GetUserByIdAsync(id);

        _mapper.Map(memberUpdateDto, guard);

        _unitOfWork.UserRepository.Update(guard);

        if (await _unitOfWork.Complete()) return NoContent();

        return BadRequest("Failed to update guard data!");
    }

    [HttpDelete("delete-guard/{id}")]
    public async Task<ActionResult> DeleteGuardAsync(int id)
    {
        var guard = await _unitOfWork.UserRepository.GetUserByIdAsync(id);

        _unitOfWork.UserRepository.Delete(guard);

        if (await _unitOfWork.Complete()) return NoContent();

        return BadRequest("Failed to delete guard");
    }

    private async Task<bool> CheckUsernameExists(string username)
    {
        return await _userManager.Users.AnyAsync(x => x.UserName == username.ToLower());
    }
}
}