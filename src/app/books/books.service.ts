import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Contants } from '../constants/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  urlBase = environment.API_URL

  constructor(private http: HttpClient) {

  }

  getNowPlaying() {
    const options = {
      headers: {
        'content-type': 'application/json',
        //Authorization: 'Bearer ' + environment.ACCESS_TOKEN
      }
    }
    return this.http.get<any>(this.urlBase + "?language=es", options)
  }
}

