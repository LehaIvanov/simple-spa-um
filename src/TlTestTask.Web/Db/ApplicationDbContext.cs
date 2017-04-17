using Microsoft.EntityFrameworkCore;
using TlTestTask.Web.Models;

namespace TlTestTask.Web.Db
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./tlTestTask.db");
        }
    }
}