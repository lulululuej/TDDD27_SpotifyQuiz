import { Component } from '@angular/core';

@Component({ 
    templateUrl: 'register.component.html' 
})
export class RegisterComponent {
    username : string ="";
    email : string ="";
    password : string ="";
    show: boolean= false;
    signUp(){
        
    }
}