using Api.DTOs;
using Api.Models;
using System.Collections.Generic;
using System.Linq;

namespace Api.Services
{
    public class TodoService : ITodoService
    {
        private static List<TodoItem> _todos = new();
        private static int _nextId = 1;

        public List<TodoItem> GetTodos(int userId)
        {
            return _todos.Where(t => t.UserId == userId).ToList();
        }

        public TodoItem AddTodo(int userId, TodoItemDto dto)
        {
            var todo = new TodoItem
            {
                Id = _nextId++,
                UserId = userId,
                Title = dto.Title,
                Description = dto.Description,
                IsCompleted = false
            };
            _todos.Add(todo);
            return todo;
        }

        public TodoItem? UpdateTodo(int userId, int todoId, TodoItemDto dto)
        {
            var todo = _todos.FirstOrDefault(t => t.Id == todoId && t.UserId == userId);
            if (todo == null) return null;
            todo.Title = dto.Title;
            todo.Description = dto.Description;
            return todo;
        }

        public bool DeleteTodo(int userId, int todoId)
        {
            var todo = _todos.FirstOrDefault(t => t.Id == todoId && t.UserId == userId);
            if (todo == null) return false;
            _todos.Remove(todo);
            return true;
        }

        public TodoItem? MarkComplete(int userId, int todoId)
        {
            var todo = _todos.FirstOrDefault(t => t.Id == todoId && t.UserId == userId);
            if (todo == null) return null;
            todo.IsCompleted = true;
            return todo;
        }
    }
}
