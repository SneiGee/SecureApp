using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Server.Data.Identity;
using Server.Dto;
using Server.Entities.Identity;
using Server.Interfaces;

namespace Server.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly IdentityContext _identityContext;
        private readonly IMapper _mapper;
        public UserRepository(IdentityContext identityContext, IMapper mapper)
        {
            _mapper = mapper;
            _identityContext = identityContext;
        }

        public async Task<MemberDto> GetMemberAsync(string username)
        {
            var getUser = await _identityContext.Users
                .Where(x => x.UserName == username)
                .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();

            return getUser!;
        }

        public async Task<IEnumerable<MemberDto>> GetMembersAsync()
        {
            return await _identityContext.Users
                .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<AppUser> GetUserByIdAsync(int id)
        {
            var getUserId = await _identityContext.Users.FindAsync(id);

            return getUserId!;
        }

        public async Task<AppUser> GetUserByUsernameAsync(string username)
        {
            var getByUsername = await _identityContext.Users
                .Include(p => p.Photos)
                .SingleOrDefaultAsync(x => x.UserName == username);

            return getByUsername!;
        }

        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await _identityContext.Users
                .Include(p => p.Photos)
                .ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _identityContext.SaveChangesAsync() > 0;
        }

        public void Update(AppUser user)
        {
            _identityContext.Entry(user).State = EntityState.Modified;
        }
    }
}