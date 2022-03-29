namespace Server.Dto
{
    public class MemberUpdateDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Interests { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Nationality { get; set; } = string.Empty;
    }
}