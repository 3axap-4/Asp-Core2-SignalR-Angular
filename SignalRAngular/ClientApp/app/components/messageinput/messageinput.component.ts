import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HubConnection } from '@aspnet/signalr-client';

@Component({
    selector: 'messageinput',
    templateUrl: './messageinput.component.html'
})
export class MessageInputComponent {

    private _hubConnection: HubConnection;
    public async: any;
    message = '';

    @Input() username: string;

    constructor() {
        this._hubConnection = new HubConnection('/chat');

        this._hubConnection.start()
            .catch(err => {
                console.log('Error while establishing connection')
            });

    }

    public sendMessage(): void {
        const data = `${this.message}`;
        this._hubConnection.invoke('Send', this.username, data);
    }
}
