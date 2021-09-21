using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTO;
using AutoMapper;
using Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IMapper _mapper;

        private readonly IUserRepository _userRepository;
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await _userRepository.GetMemberAsync();

            return Ok(users);

            // var UsertoReturn = _mapper.Map<IEnumerable<MemberDto>>(users);

            // return Ok(UsertoReturn);
        }

        // [HttpGet("{id}")]
        // public ActionResult<AppUser> GetUser(int id)
        // {
        //     return Ok(_userRepository.GetUserByIdAsync(id));
        // }

        [HttpGet("{UserName}")]
        public async Task<ActionResult<MemberDto>> GetUser(string UserName)
        {
            return await _userRepository.GetMemberAsync(UserName);

            // var user = await _userRepository.GetUserByName(UserName);

            // return _mapper.Map<MemberDto>(user);
        }

        [HttpPut]
        public async Task<ActionResult> updateUser(MemberUpdateDto memberUpdateDto)
        {
            var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            var user = await _userRepository.GetUserByName(username);

            _mapper.Map(memberUpdateDto, user);

            _userRepository.Update(user);

            if (await _userRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Updating User Failed");
        }
    }
}