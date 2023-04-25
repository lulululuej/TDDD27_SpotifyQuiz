import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class SpotifyService {
    constructor(private http : HttpClient) {}

    public getQuery(query: String) {
        const url: string = `https://developer.spotify.com/v1/${query}`; 
        const headers = new HttpHeaders(); 
    }
}