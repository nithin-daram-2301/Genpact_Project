using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Projectday2.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
         : base(options)
        {
        }

        public DbSet<ContentItem> ContentItems { get; set; } // Ensure the name matches your model
    }
}

