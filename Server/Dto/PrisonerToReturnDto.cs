namespace Server.Dto
{
    public class PrisonerToReturnDto
    {
        public int Id { get; set; }
        public string InmateId { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string PictureUrl { get; set; } = string.Empty;
        public int Age { get; set; }
        public string Race { get; set; } = string.Empty;
        public DateTime Created { get; set; } = DateTime.Now;
        public string Gender { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Height { get; set; } = string.Empty;
        public string Weight { get; set; } = string.Empty;
        public string EyeColor { get; set; } = string.Empty;
        public string HairColor { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Nationality { get; set; } = string.Empty;

        public string Block { get; set; } = null!;

        // public ICollection<PhotoDto> PrisonPhotos { get; set; } = null!;
    }
}