using Microsoft.EntityFrameworkCore;
using Server.Data.Identity;
using Server.Helpers;
using Server.Interfaces;
using Server.Services;

namespace Server.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddAutoMapper(typeof(AutoMappingProfiles).Assembly);
            services.AddDbContext<IdentityContext>(options => 
            {
                options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            });

            return services;
        }
    }
}