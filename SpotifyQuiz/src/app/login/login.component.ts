import { Component } from "@angular/core";
import { Database, set, ref, onValue } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AppComponent, hide_show_buttons } from "../app.component";


@Component({
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html',
    providers : [hide_show_buttons]
})
export class LoginComponent {
    username : string ="";
    password : string ="";
    show: boolean= false;

    constructor (
        public database: Database,
        private router: Router,
        private show_hide : hide_show_buttons,
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
                window.sessionStorage.setItem("user", value.username);
                this.show_hide.hide_login_button();
                this.show_hide.show_home_button();
                this.show_hide.hide_register_button();
                this.show_hide.show_signOut_button();
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