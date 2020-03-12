using Microsoft.EntityFrameworkCore;

namespace Interview_Demo.Models
{
    public class DemoContext : DbContext
    {
        public DemoContext(DbContextOptions<DemoContext> options)
            : base(options)
        {
        }

        public DbSet<Contact> ContactItems { get; set; }
    }
}
