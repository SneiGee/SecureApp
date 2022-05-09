using System.ComponentModel.DataAnnotations;

namespace Server.Dto
{
    public class PrisonerUpdateDto
    {
        [Required]
        public string FirstName { get; set; } = string.Empty;
        [Required]
        public string LastName { get; set; } = string.Empty;
        [Required]
        public string Address { get; set; } = string.Empty;
        [Required]
        public string Race { get; set; } = string.Empty;
        [Required]
        public string Gender { get; set; } = string.Empty;
        [Required]
        public string Status { get; set; } = string.Empty;
        [Required]
        public string Height { get; set; } = string.Empty;
        [Required]
        public string Weight { get; set; } = string.Empty;
        [Required]
        public string EyeColor { get; set; } = string.Empty;
        [Required]
        public string HairColor { get; set; } = string.Empty;
        [Required]
        public string City { get; set; } = string.Empty;
        [Required]
        public string Nationality { get; set; } = string.Empty;
    }
}