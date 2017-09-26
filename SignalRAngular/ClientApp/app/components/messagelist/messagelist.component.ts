import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HubConnection } from '@aspnet/signalr-client';

@Component({
    selector: 'messagelist',
    templateUrl: './messagelist.component.html'
})
export class MessageListComponent {

    private _hubConnection: HubConnection;
    public async: any;
    messages: string[] = [];

    constructor() {
    }

    ngOnInit() {
        this._hubConnection = new HubConnection('/chat');

        this._hubConnection.on('Send', (data: any) => {
            const received = `Received: ${data}`;
            this.messages.push(received);
        });

        this._hubConnection.start()
            .then(() => {
                console.log('Hub connection started')
            })
            .catch(err => {
                console.log('Error while establishing connection')
            });
    }

}
