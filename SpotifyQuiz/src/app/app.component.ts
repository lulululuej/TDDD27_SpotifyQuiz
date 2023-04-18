import { Component, Injectable } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class hide_show_buttons {
  $log_visible: BehaviorSubject<boolean> = new BehaviorSubject(true);

  $reg_visible: BehaviorSubject<boolean> = new BehaviorSubject(true);

  $home_visible: BehaviorSubject<boolean> = new BehaviorSubject(true);

  $out_visible: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {

  }

  public hide_login_button(): void {
    this.$log_visible.next(false);
  }

  public show_login_button(): void{
    this.$log_visible.next(true);
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

  sign_out() {
    window.sessionStorage.clear();
    this.service.hide_signOut_button();
    this.service.show_login_button();
    this.service.show_register_button();
    this.service.show_home_button();
    this.gotoHome();
    alert("User signed out");
  }
}

