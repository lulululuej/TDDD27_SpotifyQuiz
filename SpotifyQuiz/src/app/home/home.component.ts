import { Component } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {

    constructor(private http : HttpClient) {
        
    }

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
        this.http.post(spotifyUrl, httpParams, options).subscribe();
    }

}