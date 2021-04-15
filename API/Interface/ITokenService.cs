using API.Users;

namespace API.Interface
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}