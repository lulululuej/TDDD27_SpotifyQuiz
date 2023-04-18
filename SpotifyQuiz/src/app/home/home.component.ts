import { Component } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Database, set, ref, onValue } from '@angular/fire/database';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";


@Component({ 
    templateUrl: 'home.component.html' 
})
export class HomeComponent {

    constructor(
        public database : Database,
        private http : HttpClient
        ) {};

    homeButtonListener(value: any) {
        let btn = document.getElementById("home_spotify_button");
        btn?.addEventListener("click", (e:Event) => this.getSpotifyToken());
    }

    getSpotifyToken() {
        let spotifyUrl = "https://accounts.spotify.com/api/token";
        let httpParams = new HttpParams()
            .append("grant_type", "client_credentials")
            .append("client_id", "6e81edb62dbd40f9bb691d37f4b20857")
            .append("client_secret", "9f87ed6557f646298f3bfa23736a031e");
        let headers = new HttpHeaders({
            'Content-Type':'application/x-www-form-urlencoded'
        });
        
        let options = {headers:headers};
        const httpObserver = {
            next: localStorage.setItem
        }
        this.http.post(spotifyUrl, httpParams, options).subscribe(
            response => {
                let jsonResponse = JSON.parse(JSON.stringify(response))
                //JSON.parse(response);
                window.localStorage.setItem("access_token", jsonResponse["access_token"]);
                window.localStorage.setItem("token_type", jsonResponse["token_type"]);
                let time = Date.now() + 3600000;
                let actualTime = new Date();
                actualTime.setTime(time);
                window.localStorage.setItem("expires_at", actualTime.toISOString())

                set(ref(this.database, 'spotifyToken'), {
                    access_token:jsonResponse["access_token"],
                    token_type:jsonResponse["token_type"],
                    expiration_time:actualTime.toISOString()
                })
                //window.localStorage.setItem("spotifyToken", response)
            }
        );
    }

}