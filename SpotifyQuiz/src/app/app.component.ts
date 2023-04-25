import { Component, Injectable } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { getAuth, signOut, onAuthStateChanged, Auth } from "@angular/fire/auth"


//@Injectable()
//export class LoginActivate implements CanActivate {

//  constructor(
//    private authService: AuthService, 
//    private router: Router) {}

//  canActivate(
//    route:
//  ) {
//    if(!this.)
//  }
//}



@Injectable()
export class hide_show_buttons {
  $home_visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  $browse_visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  $log_visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  //$log_visible_obs: Observable<boolean> = this._log_visible.asObservable(); <- For the future, when observables will be used.

  $reg_visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  $out_visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {

  }

  public hide_login_button(): void {
    this.$log_visible.next(false);
  }

  public show_login_button(): void{
    this.$log_visible.next(true);
  }

  public show_browse_button(): void {
    this.$browse_visible.next(true);
  }

  public hide_browse_button(): void {
    this.$browse_visible.next(false);
  }

  public hide_register_button(): void {
    this.$reg_visible.next(false);
  }

  public show_register_button(): void{
    this.$reg_visible.next(true);
  }

  public hide_home_button(): void {
    this.$home_visible.next(false);
  }

  public show_home_button(): void{
    this.$home_visible.next(true);
  }

  public hide_signOut_button(): void {
    this.$out_visible.next(false);
    console.log("signout hidden");
  }

  public show_signOut_button(): void{
    this.$out_visible.next(true);
    console.log("signout wisible");
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [hide_show_buttons]
})
export class AppComponent {

  constructor(
    private router: Router, 
    public service : hide_show_buttons
  ) {};

  gotoHome(){
    this.router.navigate(['/']);
}

  title = 'SpotifyQuiz';

  sign_out_button:string = "Sign out";

  register_button:string="Register";

  login_button:string = "Login";
  
  home_button:string="Home";


/*
  checkLoggedIn() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => )
  }
*/
  sign_out() {
    window.localStorage.removeItem("user");

    const auth = getAuth();
    signOut(auth).then(() => {

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage  = error.message;
      console.log(errorMessage);
    })

    this.service.hide_signOut_button();
    this.service.show_login_button();
    this.service.show_register_button();
    this.service.hide_browse_button();
    this.service.show_home_button();
    this.gotoHome();
    alert("User signed out");
  }
}

