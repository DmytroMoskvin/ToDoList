using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public class TaskModel
    {
        public int Id { get; set; }
        public bool Done { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }
        public string Color { get; set; }
    }
}
