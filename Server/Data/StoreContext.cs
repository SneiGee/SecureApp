using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Server.Entities;

namespace Server.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options): base(options)
        {
        }

        public DbSet<Prisoner> Prisoners { get; set; } = null!;
        public DbSet<Block> Blocks { get; set; } = null!;


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}