using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TlTestTask.Web.Db;
using TlTestTask.Web.Models;

namespace TlTestTask.Web.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _userRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult GetById(int id)
        {
            var user = _userRepository.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return new ObjectResult(user);
        }

        [HttpPost]
        public IActionResult Create([FromBody] User item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _userRepository.Add(item);

            return CreatedAtRoute("GetUser", new { id = item.Id }, item);
        }

        [HttpPatch("{id}")]
        public IActionResult Update(int id, [FromBody] User item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }

            var user = _userRepository.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            user.FirstName = item.FirstName;
            user.LastName = item.LastName;
            user.BirthDate = item.BirthDate;
            user.Gender = item.Gender;

            _userRepository.Update(user);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = _userRepository.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            _userRepository.Remove(id);
            return new NoContentResult();
        }
    }
}