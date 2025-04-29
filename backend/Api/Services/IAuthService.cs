using Api.DTOs;
using Api.Models;

namespace Api.Services
{
    /// <summary>
    /// Service interface for authentication operations.
    /// </summary>
    public interface IAuthService
    {
        /// <summary>
        /// Registers a new user.
        /// </summary>
        User? Register(UserRegisterDto dto);
        /// <summary>
        /// Logs in a user.
        /// </summary>
        User? Login(UserLoginDto dto);
        /// <summary>
        /// Initiates forgot password process.
        /// </summary>
        bool ForgotPassword(string email);
    }
}
