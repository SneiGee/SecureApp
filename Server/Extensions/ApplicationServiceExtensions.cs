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
            services.Configure<CloudinarySettings>(config.GetSection("CloudinarySettings"));
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IPhotoService, PhotoService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IPrisonerRepository, PrisonerRepository>();
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IPrisonUnitOfWork, PrisonUnitOfWork>();
            services.AddAutoMapper(typeof(AutoMappingProfiles).Assembly);
            services.AddDbContext<StoreContext>(options => 
            {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            services.AddDbContext<IdentityContext>(options => 
            {
                options.UseSqlite(config.GetConnectionString("IdentityConnection"));
            });

            return services;
        }
    }
}