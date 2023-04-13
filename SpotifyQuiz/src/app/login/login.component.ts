import { Component } from "@angular/core";
import { Database, set, ref, onValue } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html',
})
export class LoginComponent {
    username : string ="";
    password : string ="";
    show: boolean= false;

    constructor (
        public database: Database,
        private router: Router
    ) {};
    
    gotoBrowse(){
        this.router.navigate(['/browse']);
    }

    signIn(value: any){
        const userRef = ref(this.database, 'users/' + value.username);
        console.log(value.username);
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if(data == null) {
                alert('No such User');
            }
            else if(value.password == snapshot.val().password) {
                this.gotoBrowse();
            }
            else {
                alert('Password Incorrect!');
            }
        });
    }
    clear(){
        this.username ="";
        this.password = "";
        this.show = true;
    }
}