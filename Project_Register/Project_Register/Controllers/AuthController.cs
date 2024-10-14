using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Scripting;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;
using Project_Register.Models;
//using BCrypt.Net;

namespace Project_Register.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly PackDbContext _context;

        public AuthController(PackDbContext context)
        {
            _context = context;
        }

        // User Registration
        [HttpPost("register")]
        public IActionResult Register([FromBody] UserRegister user)
        {
            if (_context.UserRegisters.Any(u => u.Uname == user.Uname))
                return BadRequest("User already exists");

            // Store password as plain text (not recommended)
            _context.UserRegisters.Add(user);
            _context.SaveChanges();
            return Ok("User registered successfully");
        }

        // User Login
        [HttpPost("login")]
        public IActionResult Login([FromBody] UserRegister user)
        {
            if (user is null)
            {
                return BadRequest("Invalid client request");
            }

            // Check user in the database
            var existingUser = _context.UserRegisters.SingleOrDefault(u => u.Uname == user.Uname);
            if (existingUser == null || existingUser.Password != user.Password) // Check plain text password
            {
                return Unauthorized();
            }

            // Generate JWT token
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855")); // Use your own key
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, existingUser.Uname),
                new Claim(ClaimTypes.Role, "Manager") // Adjust role as needed
            };

            var tokenOptions = new JwtSecurityToken(
                issuer: "https://localhost:5001",
                audience: "https://localhost:5001",
                claims: claims,
                expires: DateTime.Now.AddMinutes(30), // Set your expiration time
                signingCredentials: signinCredentials
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

            return Ok(new AuthenticatedResponse { Token = tokenString });
        }
    }

}
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.IdentityModel.Tokens;
//using System.IdentityModel.Tokens.Jwt;
//using System.Security.Claims;
//using System.Text;
//using UserAuthAPI.Data;
//using UserAuthAPI.Models;

//namespace UserAuthAPI.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class AuthController : ControllerBase
//    {
//        private readonly PackDbContext _context;

//        public AuthController(PackDbContext context)
//        {
//            _context = context;
//        }

//        // User Registration
//        [HttpPost("register")]
//        public IActionResult Register([FromBody] UserRegister user)
//        {
//            // Check if user already exists
//            if (_context.UserRegister.Any(u => u.Uname == user.Uname))
//                return BadRequest("User already exists");

//            // Store password as plain text (not recommended)
//            _context.UserRegister.Add(user);
//            _context.SaveChanges();
//            return Ok("User registered successfully");
//        }

//        // User Login
//        [HttpPost("login")]
//        public IActionResult Login([FromBody] UserRegister user)
//        {
//            // Fetch user from database
//            var existingUser = _context.UserRegister.SingleOrDefault(u => u.Uname == user.Uname);
//            if (existingUser == null || existingUser.Password != user.Password) // Check plain text password
//                return Unauthorized();

//            // Generate JWT token
//            var tokenHandler = new JwtSecurityTokenHandler();
//            var tokenKey = Encoding.UTF8.GetBytes("YourSecretKeyHere");
//            var tokenDescriptor = new SecurityTokenDescriptor
//            {
//                Subject = new ClaimsIdentity(new Claim[] { new Claim(ClaimTypes.Name, existingUser.Uname) }),
//                Expires = DateTime.UtcNow.AddHours(1),
//                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
//            };

//            var token = tokenHandler.CreateToken(tokenDescriptor);
//            return Ok(new { Token = tokenHandler.WriteToken(token) });
//        }
//    }
//}
