using Api.DTOs;

namespace Api.Validation
{
    /// <summary>
    /// Provides validation logic for todo items.
    /// </summary>
    public class TodoValidator
    {
        public static bool Validate(TodoItemDto dto, out string error)
        {
            if (string.IsNullOrWhiteSpace(dto.Title)) { error = "Title is required."; return false; }
            if (string.IsNullOrWhiteSpace(dto.Description)) { error = "Description is required."; return false; }
            error = string.Empty;
            return true;
        }
    }
}
