import { Component } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';

@Component({ 
    templateUrl: 'register.component.html' 
})
export class RegisterComponent {
    username : string ="";
    email : string ="";
    password : string ="";
    show: boolean= false;

    constructor (public database: Database) {};

    signUp(value: any){
        console.log(value);
        console.log(value.username, value.email, value.password);
        set(ref(this.database, 'users/' + value.username), {
            username: value.username,
            email: value.email,
            password : value.password
        });
        alert('User Created!');
    }
}