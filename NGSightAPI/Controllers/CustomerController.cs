using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NGSightAPI.Models;

namespace NGSightAPI
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : Controller
    {
        private readonly ApiContext _context;
        public CustomerController(ApiContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var data = _context.Customers.OrderBy(c => c.Id); //order by Id.
            return Ok(data);
        }

        [HttpGet("{id}", Name = "GetCustomer")] // usage: /customer/3
        //[HttpGet("getcustomer")] //usage:  /customer/getcustomer?id=3
        public IActionResult Get(int id)
        {
            var data = _context.Customers.FirstOrDefault(c => c.Id == id);
            return Ok(data);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Customer customer) 
        {
            if(customer == null)
            {
                return BadRequest();
            }
            _context.Add(customer);
            _context.SaveChanges();
            return CreatedAtRoute("GetCustomer", new {id = customer.Id}, customer);
        }
    }
}