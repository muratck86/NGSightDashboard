using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NGSightAPI.Models;

namespace NGSightAPI
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : Controller
    {
        private readonly ApiContext _context;
        public OrderController(ApiContext context)
        {
            _context = context;
        }

        [HttpGet("{pageIndex:int}/{pageSize:int}")]
        public IActionResult Get(int pageIndex, int pageSize)
        {
            var data = _context.Orders.Include(o => o.Customer)
            .OrderByDescending(c => c.Placed);

            var page = new PaginatedResponse<Order>(data, pageIndex, pageSize);
            var totalCount = data.Count();
            var totalPages = Math.Ceiling((double)totalCount/pageSize);

            var response = new {
                Page = page,
                TotalPages = totalPages
            };
            return Ok(response);
        }

        [HttpGet("ByState")]
        public IActionResult ByState()
        {
            var orders = _context.Orders.Include(o => o.Customer).ToList(); // get orders with their customers

            var groupedResult = orders.GroupBy(o => o.Customer.State).ToList()  //Group by customer State
                .Select(group => new { //Select from the list of grouped orders by using their state as Key, and sum up the total prices
                    State = group.Key,
                    Total = group.Sum( x => x.Total)
                }).OrderByDescending(res => res.Total).ToList(); //order by total price.

                return Ok(groupedResult);
        }

        [HttpGet("ByCustomer/{n}")]
        public IActionResult ByCustomer(int n)
        {
            var orders = _context.Orders.Include(or => or.Customer).ToList();

            var groupedResult = orders.GroupBy(o => o.Customer.Id).ToList()
                .Select(grp => new {
                    Name = _context.Customers.Find(grp.Key).Name,
                    Total = grp.Sum(x => x.Total)
                }).OrderByDescending(res => res.Total)
                .Take(n) //take top n customers by total price which is already orderedby
                .ToList();
                
                return Ok(groupedResult);
        }

        [HttpGet("GetOrder/{}", Name = "GetOrder")]
        public IActionResult GetOrder(int id)
        {
            var result = _context.Orders.Include(o => o.Customer).FirstOrDefault(o => o.Id == id);
            return Ok(result);
        }
    }
}