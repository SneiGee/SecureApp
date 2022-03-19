using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Entities;

namespace Server.Data.Config
{
    public class PrisonerConfiguration : IEntityTypeConfiguration<Prisoner>
    {
        public void Configure(EntityTypeBuilder<Prisoner> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.FirstName).IsRequired().HasMaxLength(100);
            builder.Property(p => p.LastName).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Address).IsRequired().HasMaxLength(255);
            builder.Property(p => p.DateOfBirth).IsRequired();
            builder.Property(p => p.Race).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Gender).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Status).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Height).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Weight).IsRequired().HasMaxLength(100);
            builder.Property(p => p.EyeColor).IsRequired().HasMaxLength(100);
            builder.Property(p => p.HairColor).IsRequired().HasMaxLength(100);
            builder.Property(p => p.City).IsRequired();
            builder.Property(p => p.Nationality).IsRequired();
            builder.HasOne(p => p.Block).WithMany()
                .HasForeignKey(b => b.BlockId);
        }
    }
}