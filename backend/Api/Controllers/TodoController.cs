using Microsoft.AspNetCore.Mvc;
using Api.Services;
using Api.DTOs;
using Api.Models;
using Api.Validation;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private static readonly ITodoService _todoService = new TodoService();
        // For demo, userId is mocked as 1
        private int UserId => 1;

        [HttpGet]
        public IActionResult GetTodos()
        {
            var todos = _todoService.GetTodos(UserId);
            return Ok(todos);
        }

        [HttpPost]
        public IActionResult AddTodo([FromBody] TodoItemDto dto)
        {
            if (!TodoValidator.Validate(dto, out var error))
                return BadRequest(error);
            var todo = _todoService.AddTodo(UserId, dto);
            return Ok(todo);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTodo(int id, [FromBody] TodoItemDto dto)
        {
            if (!TodoValidator.Validate(dto, out var error))
                return BadRequest(error);
            var todo = _todoService.UpdateTodo(UserId, id, dto);
            if (todo == null)
                return NotFound();
            return Ok(todo);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTodo(int id)
        {
            var result = _todoService.DeleteTodo(UserId, id);
            if (!result)
                return NotFound();
            return Ok();
        }

        [HttpPatch("{id}/complete")]
        public IActionResult MarkComplete(int id)
        {
            var todo = _todoService.MarkComplete(UserId, id);
            if (todo == null)
                return NotFound();
            return Ok(todo);
        }
    }
}
