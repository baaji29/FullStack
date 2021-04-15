using System.ComponentModel.DataAnnotations;

namespace API.DTO
{
    public class RegisterDto
    {
        [Required]
        public string userName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}