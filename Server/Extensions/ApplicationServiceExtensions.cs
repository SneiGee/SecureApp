using Microsoft.EntityFrameworkCore;
using Server.Data;
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
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IPrisonerRepository, PrisonerRepository>();
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddAutoMapper(typeof(AutoMappingProfiles).Assembly);
            services.AddDbContext<StoreContext>(options => 
            {
                options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            });
            services.AddDbContext<IdentityContext>(options => 
            {
                options.UseSqlServer(config.GetConnectionString("IdentityConnection"));
            });

            return services;
        }
    }
}