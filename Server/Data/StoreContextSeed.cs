using System.Text.Json;
using Server.Entities;

namespace Server.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedPrisonerAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.Blocks.Any())
                {
                    var blockData = await System.IO.File.ReadAllTextAsync("Data/SeedData/BlockSeedData.json");
                    var blocks = JsonSerializer.Deserialize<List<Block>>(blockData);

                    if (blocks == null) return;

                    foreach (var item in blocks)
                    {
                        context.Blocks.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
                
                if (!context.Prisoners.Any())
                {
                    var prisonData = await System.IO.File.ReadAllTextAsync("Data/SeedData/PrisonersData.json");
                    var prisons = JsonSerializer.Deserialize<List<Prisoner>>(prisonData);

                    if (prisons == null) return;

                    foreach (var item in prisons)
                    {
                        context.Prisoners.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}