using System.Collections.Generic;
using TlTestTask.Web.Models;

namespace TlTestTask.Web.Db
{
    public interface IUserRepository
    {
        void Add(User user);
        IEnumerable<User> GetAll();
        User Find(int id);
        void Remove(int id);
        void Update(User user);
    }
}