using System;
using System.Collections.Generic;
using System.Linq;
using NGSightAPI.Models;

namespace NGSightAPI
{
    public class DataSeed
    {
        private readonly ApiContext _context;
        public DataSeed(ApiContext context)
        {
            _context = context;
        }

        public void SeedData(int nCustomers, int nOrders, int nServers, int nScooters)
        {
            if (!_context.Customers.Any())
            {
                SeedCustomers(nCustomers);
                _context.SaveChanges();

            }

            if (!_context.Orders.Any())
            {
                SeedOrders(nOrders);
                _context.SaveChanges();

            }

            if (!_context.Servers.Any())
            {
                SeedServers(nServers);
                _context.SaveChanges();

            }

            if (!_context.Scooters.Any())
            {
                SeedScooters(nScooters);
                _context.SaveChanges();

            }


        }

        private void SeedCustomers(int nCustomers)
        {
            List<Customer> customers = BuildCustomerList(nCustomers);

            foreach (var customer in customers)
            {
                _context.Customers.Add(customer);
            }
        }

        private void SeedOrders(int nOrders)
        {
            List<Order> orders = BuildOrdersList(nOrders);
            foreach (var order in orders)
            {
                _context.Orders.Add(order);
            }
        }

        private void SeedServers(int nServers)
        {
            List<Server> servers = BuildServerList(nServers);
            foreach (var server in servers)
            {
                _context.Servers.Add(server);
            }
        }


        private void SeedScooters(int nScooters)
        {
            List<Scooter> scooters = BuildScooterList(nScooters);
            foreach (var scooter in scooters)
            {
                _context.Scooters.Add(scooter);
            }
        }

        private List<Customer> BuildCustomerList(int n)
        {
            var names = new List<string>();
            var customers = new List<Customer>();
            for (int i = 1; i <= n; i++)
            {
                var name = Helpers.MakeUniqueCustomerName(names);
                names.Add(name);
                customers.Add(new Customer
                {
                    Id = i,
                    Name = name,
                    Email = Helpers.MakeCustomerEmail(name),
                    State = Helpers.MakeState()
                });
            }
            return customers;
        }

        private List<Order> BuildOrdersList(int nOrders)
        {
            var orders = new List<Order>();
            var rand = new Random();

            for (int i = 1; i <= nOrders; i++)
            {
                var randomCustomerId = rand.Next(_context.Customers.Count()) + 1;
                var placed = Helpers.GetRandomOrderPlaced();
                var completed = Helpers.GetRandomOrderCompleted(placed);
                var customers = _context.Customers.ToList();
                orders.Add(new Order
                {
                    Id = i,
                    Customer = customers.First(c => c.Id == randomCustomerId),
                    Total = Helpers.GetRandomOrderTotal(),
                    Placed = placed,
                    Completed = completed
                });
            }
            return orders;
        }

        private List<Server> BuildServerList(int nServers)
        {
            var servers = new List<Server>
            {
                new Server {
                    Id  = 1,
                    Name = "Dev-Web",
                    IsOnline = true
                },
                    new Server {
                    Id  = 2,
                    Name = "Dev-Mail",
                    IsOnline = false
                },
                    new Server {
                    Id  = 3,
                    Name = "Dev-Services",
                    IsOnline = false
                },
                    new Server {
                    Id  = 4,
                    Name = "QA-Web",
                    IsOnline = true
                },
                    new Server {
                    Id  = 5,
                    Name = "QA-Mail",
                    IsOnline = true
                },
                    new Server {
                    Id  = 6,
                    Name = "QA-Services",
                    IsOnline = false
                },
                    new Server {
                    Id  = 7,
                    Name = "Prod-Web",
                    IsOnline = true
                },
                    new Server {
                    Id  = 8,
                    Name = "Prod-Mail",
                    IsOnline = false
                },
                    new Server {
                    Id  = 9,
                    Name = "Prod-Services",
                    IsOnline = true
                }
            };
            return servers;
        }



        private List<Scooter> BuildScooterList(int nScooters)
        {
            var scooters = new List<Scooter>();
            for (int i = 1; i <= nScooters; i++)
            {
                scooters.Add(new Scooter
                {
                    Id = i,
                    Barcode = Helpers.GetRandomBarcode("CM", 8),
                    Battery = Helpers.GetRandomBatteryStat(),
                    Description = "",
                    GsmNumber = Helpers.GetRandomGSMNo(),
                    Imei = Helpers.GetRandomImei(),
                    Name = Helpers.GetRandomScooterName(i),
                    PositionX = Helpers.GetRandomXPosition(),
                    PositionY = Helpers.GetRandomYPosition(),
                    Rate = Helpers.GetRandomRate()
                });
            }
            return scooters;
        }
    }
}