using Api.DTOs;
using Api.Models;
using System.Collections.Generic;
using System.Linq;

namespace Api.Services
{
    public class AuthService : IAuthService
    {
        private static List<User> _users = new();
        private static int _nextId = 1;

        public User? Register(UserRegisterDto dto)
        {
            if (_users.Any(u => u.Email == dto.Email)) return null;
            var user = new User
            {
                Id = _nextId++,
                Username = dto.Username,
                Email = dto.Email,
                PasswordHash = dto.Password // For demo only; hash in real apps
            };
            _users.Add(user);
            return user;
        }

        public User? Login(UserLoginDto dto)
        {
            return _users.FirstOrDefault(u => u.Email == dto.Email && u.PasswordHash == dto.Password);
        }

        public bool ForgotPassword(string email)
        {
            var user = _users.FirstOrDefault(u => u.Email == email);
            return user != null;
        }
    }
}
