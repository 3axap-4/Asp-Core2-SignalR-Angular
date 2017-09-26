using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SignalRAngular.Controllers
{
    [Route("api/[controller]")]
    public class ChatController : Controller
    {
        [HttpGet("join")]
        public bool Join([FromQuery] string username)
        {
            return !string.IsNullOrEmpty(username);
        }
    }
}
