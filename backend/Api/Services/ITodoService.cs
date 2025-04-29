using System.Collections.Generic;
using Api.DTOs;
using Api.Models;

namespace Api.Services
{
    /// <summary>
    /// Service interface for todo item operations.
    /// </summary>
    public interface ITodoService
    {
        /// <summary>
        /// Gets all todo items for a user.
        /// </summary>
        List<TodoItem> GetTodos(int userId);
        /// <summary>
        /// Adds a new todo item for a user.
        /// </summary>
        TodoItem AddTodo(int userId, TodoItemDto dto);
        /// <summary>
        /// Updates an existing todo item for a user.
        /// </summary>
        TodoItem? UpdateTodo(int userId, int todoId, TodoItemDto dto);
        /// <summary>
        /// Deletes a todo item for a user.
        /// </summary>
        bool DeleteTodo(int userId, int todoId);
        /// <summary>
        /// Marks a todo item as complete for a user.
        /// </summary>
        TodoItem? MarkComplete(int userId, int todoId);
    }
}
