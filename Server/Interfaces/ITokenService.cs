using Server.Entities.Identity;

namespace Server.Interfaces
{
    public interface ITokenService
    {
         Task<string> CreateToken(AppUser user);
    }
}