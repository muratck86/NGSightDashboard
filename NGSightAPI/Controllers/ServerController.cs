using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NGSightAPI.Models;

namespace NGSightAPI
{
    [ApiController]
    [Route("[controller]")]
    public class ServerController : Controller
    {
        private readonly ApiContext _context;
        public ServerController(ApiContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var servers = _context.Servers.OrderBy(o => o.Id).ToList();

            return Ok(servers);
        }

        [HttpGet("{id}", Name = "GetServer")]
        public IActionResult Get(int id)
        {
            var response = _context.Servers.Find(id);
            return Ok(response);
        }

        [HttpPut("{id}")]
        public IActionResult Message(int id, [FromBody] ServerMessage message)
        {
            var server = _context.Servers.Find(id);
            if(server == null)
            {
                return NotFound();
            }

            //These should be refactored: moved into a service
            if(message.Payload == "activate")
            {
                server.IsOnline = true;
            }
            if(message.Payload == "deactivate")
            {
                server.IsOnline = false;
            }
            _context.SaveChanges();

            return new NoContentResult();
        }
    }
}