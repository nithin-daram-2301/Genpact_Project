//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using Projectday2.Data;
//using Projectday2.Models;

//namespace Projectday2.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class ContentItemsController : ControllerBase
//    {
//        private readonly ContentItemsController _context;

//        public ContentItemsController(ContentItemsController context)
//        {
//            _context = context;
//        }

//        // GET: api/ContentItems
//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<ContentItem>>> GetContentItem()
//        {
//            return await _context.ContentItem.ToListAsync();
//        }

//        // GET: api/ContentItems/5
//        [HttpGet("{id}")]
//        public async Task<ActionResult<ContentItem>> GetContentItem(int id)
//        {
//            var contentItem = await _context.ContentItem.FindAsync(id);

//            if (contentItem == null)
//            {
//                return NotFound();
//            }

//            return contentItem;
//        }

//        // PUT: api/ContentItems/5
//        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//        [HttpPut("{id}")]
//        public async Task<IActionResult> PutContentItem(int id, ContentItem contentItem)
//        {
//            if (id != contentItem.Id)
//            {
//                return BadRequest();
//            }

//            _context.Entry(contentItem).State = EntityState.Modified;

//            try
//            {
//                await _context.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!ContentItemExists(id))
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return NoContent();
//        }

//        // POST: api/ContentItems
//        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//        [HttpPost]
//        public async Task<ActionResult<ContentItem>> PostContentItem(ContentItem contentItem)
//        {
//            _context.ContentItem.Add(contentItem);
//            await _context.SaveChangesAsync();

//            return CreatedAtAction("GetContentItem", new { id = contentItem.Id }, contentItem);
//        }

//        // DELETE: api/ContentItems/5
//        [HttpDelete("{id}")]
//        public async Task<IActionResult> DeleteContentItem(int id)
//        {
//            var contentItem = await _context.ContentItem.FindAsync(id);
//            if (contentItem == null)
//            {
//                return NotFound();
//            }

//            _context.ContentItem.Remove(contentItem);
//            await _context.SaveChangesAsync();

//            return NoContent();
//        }

//        private bool ContentItemExists(int id)
//        {
//            return _context.ContentItem.Any(e => e.Id == id);
//        }
//    }
//}
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projectday2.Data;
using Projectday2.Models;

namespace Projectday2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context; // Use the correct context here

        public ContentItemsController(ApplicationDbContext context) // Update constructor
        {
            _context = context;
        }

        // GET: api/ContentItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContentItem>>> GetContentItems() // Fixed method name
        {
            return await _context.ContentItems.ToListAsync(); // Use the correct DbSet
        }

        // GET: api/ContentItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContentItem>> GetContentItem(int id)
        {
            var contentItem = await _context.ContentItems.FindAsync(id); // Use the correct DbSet

            if (contentItem == null)
            {
                return NotFound();
            }

            return contentItem;
        }

        // PUT: api/ContentItems/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContentItem(int id, ContentItem contentItem)
        {
            if (id != contentItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(contentItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContentItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ContentItems
        [HttpPost]
        public async Task<ActionResult<ContentItem>> PostContentItem(ContentItem contentItem)
        {
            _context.ContentItems.Add(contentItem); // Use the correct DbSet
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContentItem", new { id = contentItem.Id }, contentItem);
        }

        // DELETE: api/ContentItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContentItem(int id)
        {
            var contentItem = await _context.ContentItems.FindAsync(id); // Use the correct DbSet
            if (contentItem == null)
            {
                return NotFound();
            }

            _context.ContentItems.Remove(contentItem); // Use the correct DbSet
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContentItemExists(int id)
        {
            return _context.ContentItems.Any(e => e.Id == id); // Use the correct DbSet
        }
    }
}
