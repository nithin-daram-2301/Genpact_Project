using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Projectday2.Models;

namespace Projectday2.Data
{
    public class ContentItemsController : DbContext
    {
        public ContentItemsController (DbContextOptions<ContentItemsController> options)
            : base(options)
        {
        }

        public DbSet<Projectday2.Models.ContentItem> ContentItem { get; set; } = default!;
    }
}
