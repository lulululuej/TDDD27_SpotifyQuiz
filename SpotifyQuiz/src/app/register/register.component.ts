import { Component } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';
import { hide_show_buttons } from '../app.component';


@Component({ 
    templateUrl: 'register.component.html' 
})
export class RegisterComponent {
    username : string ="";
    email : string ="";
    password : string ="";
    show: boolean= false;

    constructor (
        public database: Database,
        private router: Router,
        private show_hide : hide_show_buttons
        ) {};

    gotoBrowse(){
        this.router.navigate(['/browse']);
    }

    signUp(value: any){
        console.log(value);
        console.log(value.username, value.email, value.password);
        set(ref(this.database, 'users/' + value.username), {
            username: value.username,
            email: value.email,
            password : value.password
        });
        alert('User Created!');
        this.show_hide.hide_login_button();
        this.show_hide.hide_register_button();
        this.show_hide.show_signOut_button();
        this.show_hide.show_browse_button();
        //this.show_hide.show_home_button();
        this.gotoBrowse();
        window.localStorage.setItem("user", value.username);
    }
}