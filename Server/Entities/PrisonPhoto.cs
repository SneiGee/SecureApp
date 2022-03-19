using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Entities
{
    [Table("PrisonPhotos")]
    public class PrisonPhoto
    {
        public int Id { get; set; }
        public string Url { get; set; } = string.Empty;
        public bool IsMain { get; set; } = true;
        public string PublicId { get; set; } = string.Empty;
        public Prisoner? Prisoner { get; set; }
        public int PrisonerId { get; set; }
    }
}