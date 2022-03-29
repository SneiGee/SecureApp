using System.Security.Claims;

namespace Server.Extensions
{
    public static class ClaimsPrincipleExtension
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
            var getUser = user.FindFirst(ClaimTypes.Name)?.Value;
            return  getUser!;
        }

        // public static int GetUserId(this ClaimsPrincipal user)
        // {
        //     return int.Parse(user.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        // }
    }
}