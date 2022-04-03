using System.ComponentModel.DataAnnotations;

namespace Server.Dto
{
    public class BlockCreateDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;
    }
}