using Microsoft.AspNetCore.Mvc;
using Api.Services;
using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Logging;
using Api.Validation;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors] // Explicitly enable CORS for this controller
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(IAuthService authService, ILogger<AuthController> logger)
        {
            _authService = authService;
            _logger = logger;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] UserRegisterDto dto)
        {
            _logger.LogInformation("Register endpoint hit");
            if (!UserValidator.ValidateRegister(dto, out var error))
                return BadRequest(error);
            var user = _authService.Register(dto);
            if (user == null)
                return BadRequest("Email already exists");
            return Ok(user);
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] UserLoginDto dto)
        {
            _logger.LogInformation("Login endpoint hit");
            if (!UserValidator.ValidateLogin(dto, out var error))
                return BadRequest(error);
            var user = _authService.Login(dto);
            if (user == null)
                return Unauthorized("Invalid credentials");
            return Ok(user);
        }

        [HttpPost("forgot-password")]
        public IActionResult ForgotPassword([FromBody] string email)
        {
            _logger.LogInformation("ForgotPassword endpoint hit");
            var result = _authService.ForgotPassword(email);
            if (!result)
                return NotFound("User not found");
            return Ok("Password reset link sent (mock)");
        }
    }
}
