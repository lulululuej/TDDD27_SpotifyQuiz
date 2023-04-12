import { Component } from '@angular/core';

@Component({ 
    templateUrl: 'register.component.html' 
})
export class RegisterComponent {
    username : string ="";
    email : string ="";
    password : string ="";
    show: boolean= false;
    signup_data = {"username":this.username, "password": this.password, "email": this.email};
    signUp(){
        let signup_req = new XMLHttpRequest();
        signup_req.open("POST", "/sign_up/", true);
        signup_req.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        signup_req.send(JSON.stringify(this.signup_data));
    }
}