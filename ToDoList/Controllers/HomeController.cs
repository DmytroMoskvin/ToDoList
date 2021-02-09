using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    public class HomeController : Controller
    {
        private static int id = 0;
        private static TaskArrModel taskArrModel = new TaskArrModel();
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Add(TaskModel model)
        {
            model.Id = id;
            taskArrModel.models.Add(model);
            id++;
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Change(TaskModel model)
        {
            var task = taskArrModel.models.Single(u => u.Id == model.Id);
            task.Done = model.Done;
            task.Header = model.Header;
            task.Text = model.Text;
            if (model.Color != null)
                task.Color = model.Color;
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            var task = taskArrModel.models.Single(u => u.Id == id);
            taskArrModel.models.Remove(task);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View(taskArrModel.models);
        }

        [ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any, NoStore = false)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
