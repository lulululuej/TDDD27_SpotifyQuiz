import { Component } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';
import { hide_show_buttons } from '../app.component';
import { getAuth, createUserWithEmailAndPassword, updateProfile, updateCurrentUser } from "@angular/fire/auth";



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

    async signUp(value: any){
        console.log(value.username, value.email, value.password);
        /*set(ref(this.database, 'users/' + value.username), {
            username: value.username,
            email: value.email,
            password : value.password
        });*/
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            //alert('User Created!');
            this.gotoBrowse();
            window.localStorage.setItem("user", value.username);

            this.show_hide.hide_login_button();
            this.show_hide.hide_register_button();
            this.show_hide.show_signOut_button();
            this.show_hide.show_browse_button();
            //this.show_hide.show_home_button();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error number " + errorCode);
            console.log(errorMessage);
            alert(errorMessage);
        });
        let user = auth.currentUser;

        if (user) {
            await updateProfile(user, {
                displayName: value.username
            });
            console.log("User profilename is " + user.displayName);
        }

    }
}