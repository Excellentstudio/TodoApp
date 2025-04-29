namespace Api.Models
{
    /// <summary>
    /// Represents a todo item in the system.
    /// </summary>
    public class TodoItem
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
