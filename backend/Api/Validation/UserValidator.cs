using Api.DTOs;

namespace Api.Validation
{
    /// <summary>
    /// Provides validation logic for user registration and login.
    /// </summary>
    public class UserValidator
    {
        public static bool ValidateRegister(UserRegisterDto dto, out string error)
        {
            if (string.IsNullOrWhiteSpace(dto.Username)) { error = "Username is required."; return false; }
            if (string.IsNullOrWhiteSpace(dto.Email)) { error = "Email is required."; return false; }
            if (string.IsNullOrWhiteSpace(dto.Password) || dto.Password.Length < 6) { error = "Password must be at least 6 characters."; return false; }
            error = string.Empty;
            return true;
        }

        public static bool ValidateLogin(UserLoginDto dto, out string error)
        {
            if (string.IsNullOrWhiteSpace(dto.Email)) { error = "Email is required."; return false; }
            if (string.IsNullOrWhiteSpace(dto.Password)) { error = "Password is required."; return false; }
            error = string.Empty;
            return true;
        }
    }
}
