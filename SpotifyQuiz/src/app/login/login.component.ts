import { Component } from "@angular/core";

@Component({
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html',
})
export class LoginComponent {
    username : string ="";
    password : string ="";
    show: boolean= false;
    submit(){
        console.log("user name is " + this.username)
        this.clear();
    }
    clear(){
        this.username ="";
        this.password = "";
        this.show = true;
    }
}