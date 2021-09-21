using API;
using API.Controllers;
using API.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    public class BugController : BaseApiController
    {
        private readonly DataContext _context;
        public BugController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "Yennanu Theriyalaiyae";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var things = _context.Users.Find(-1);

            if (things == null) return NotFound();

            return Ok(things);
        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var things = _context.Users.Find(-1);
            var thingToReturn = things.ToString();
            return thingToReturn;
            // return "Yennanu Theriyalaiyae";
        }

        [HttpGet("bad-Request")]
        public ActionResult<AppUser> GetBadRequest()
        {
            return BadRequest("This is not good Request");
        }
    }
}