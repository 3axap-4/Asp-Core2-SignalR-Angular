import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageInputComponent } from '../messageinput/messageinput.component';
import { MessageListComponent } from '../messagelist/messagelist.component';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent {

    public username: string;

    constructor(private storage: LocalStorageService) {
        this.username = storage.get('username');
        if (!this.username) {
            console.error('User not specified');
        }
    }

}
