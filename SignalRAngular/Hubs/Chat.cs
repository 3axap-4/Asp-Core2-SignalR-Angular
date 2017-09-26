using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRAngular.Hubs
{
    public class Chat : Hub
    {
        public Task Send(string username, string data)
        {
            var messageText = $"[{username}] sent : {data}";
            return Clients.All.InvokeAsync("Send", messageText);
        }
    }
}
