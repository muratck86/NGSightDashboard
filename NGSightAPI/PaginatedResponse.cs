using System.Collections.Generic;
using System.Linq;

namespace NGSightAPI
{
    public class PaginatedResponse<T>
    {
        public PaginatedResponse(IEnumerable<T> data, int pageIndex, int pageSize)
        {
            Data = data.Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
            Total = data.Count();
        }

        public int Total { get; set; }
        public IEnumerable<T> Data { get; set; }
    }
}