using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data.Identity;
using Server.Dto;
using Server.Entities;
using Server.Interfaces;

namespace Server.Controllers
{
    [Authorize]
    public class UsersController : BaseController
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await _repository.GetMembersAsync();

            return Ok(users);
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            return await _repository.GetMemberAsync(username);
        }
    }
}