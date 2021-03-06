using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NGSightAPI.Models;

namespace NGSightAPI
{
    [ApiController]
    [Route("[controller]")]
    public class ScooterController : Controller
    {
        private readonly ApiContext _context;
        public ScooterController(ApiContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var result = _context.Scooters.OrderBy(s => s.Id).ToList();
            return Ok(result);
        }

        [HttpGet("{pageNo}/{pageSize}")]
        public IActionResult Get(int pageNo, int pageSize)
        {
            var data = _context.Scooters.OrderBy(s => s.Id).ToList();

            var page = new PaginatedResponse<Scooter>(data, pageNo, pageSize);
            var totalCount = data.Count();
            var totalPages = Math.Ceiling((double)totalCount / pageSize);

            return Ok(new
            {
                Page = page,
                TotalPages = totalPages
            });
        }

        [HttpGet("ById/{id}", Name = "GetById")]
        public IActionResult Get(int id)
        {
            var scooter = _context.Scooters.FirstOrDefault(s => s.Id == id);
            return Ok(scooter);
        }

        [HttpPost]
        public IActionResult Add([FromBody] Scooter scooter)
        {
            if (scooter == null)
            {
                return BadRequest();
            }
            _context.Scooters.Add(scooter);
            _context.SaveChanges();

            return CreatedAtRoute("GetById", new {scooter.Id}, scooter);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Scooter scooter)
        {
            _context.Scooters.Update(scooter);
            _context.SaveChanges();
            return CreatedAtRoute("GetById", new {Id = scooter.Id}, scooter);
        }
    }
}