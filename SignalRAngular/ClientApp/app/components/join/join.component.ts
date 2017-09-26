import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router'

@Component({
    selector: 'join',
    templateUrl: './join.component.html'
})
export class JoinComponent {

    public currentName = "";


    constructor(private http: Http,
                @Inject('BASE_URL') private baseUrl: string,
                private storage: LocalStorageService,
                private router: Router) {

    }


    jointochat(name: string) {
        let uri = this.baseUrl + 'api/chat/join/?username=' + name;
        this.http.get(uri).subscribe(result => {
           
            if (result.json() == true) {
                this.storage.set('username', name);
                this.router.navigateByUrl('chat');
            }
            else {
                console.info('Fail');
            }

        }, error => console.error(error));
    }

}
