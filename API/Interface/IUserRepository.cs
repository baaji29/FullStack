using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTO;
using API.Users;

namespace Interface
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUserAsync();
        Task<AppUser> GetUserByIdAsync(int Id);
        Task<AppUser> GetUserByName(string UserName);
        Task<MemberDto> GetMemberAsync(string UserName);
        Task<IEnumerable<MemberDto>> GetMemberAsync();
    }
}