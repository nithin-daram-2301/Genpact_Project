using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_Register.Models;

namespace Project_Register.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegistersController : ControllerBase
    {
        private readonly PackDbContext _context;

        public UserRegistersController(PackDbContext context)
        {
            _context = context;
        }

        // GET: api/UserRegisters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserRegister>>> GetUserRegisters()
        {
            return await _context.UserRegisters.ToListAsync();
        }

        // GET: api/UserRegisters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserRegister>> GetUserRegister(int id)
        {
            var userRegister = await _context.UserRegisters.FindAsync(id);

            if (userRegister == null)
            {
                return NotFound();
            }

            return userRegister;
        }

        // PUT: api/UserRegisters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserRegister(int id, UserRegister userRegister)
        {
            if (id != userRegister.Id)
            {
                return BadRequest();
            }

            _context.Entry(userRegister).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserRegisterExists(id))
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

        // POST: api/UserRegisters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserRegister>> PostUserRegister(UserRegister userRegister)
        {
            _context.UserRegisters.Add(userRegister);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserRegister", new { id = userRegister.Id }, userRegister);
        }

        // DELETE: api/UserRegisters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserRegister(int id)
        {
            var userRegister = await _context.UserRegisters.FindAsync(id);
            if (userRegister == null)
            {
                return NotFound();
            }

            _context.UserRegisters.Remove(userRegister);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserRegisterExists(int id)
        {
            return _context.UserRegisters.Any(e => e.Id == id);
        }
    }
}
