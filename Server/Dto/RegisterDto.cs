using System.ComponentModel.DataAnnotations;

namespace Server.Dto
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; } = string.Empty;
        // [Required] 
        // public string KnownAs { get; set; } = string.Empty;
        // [Required]
        // public string City { get; set; } = string.Empty;
        // [Required]
        // public string Nationality { get; set; } = string.Empty;
        // [Required]
        // public string Gender { get; set; } = string.Empty;
        // [Required]
        // public DateTime DateOfBirth { get; set; }

        public int BlockId { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; } = string.Empty;
        // [Required]
        // public string Email { get; set; } = string.Empty;
        // public bool confirmedEmail { get; set; }
    }
}