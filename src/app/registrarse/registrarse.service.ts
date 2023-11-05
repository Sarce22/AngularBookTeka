import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contants } from '../constants/constants';
import { environment } from 'src/environments/environment.development';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {

  url_base = environment.API_URL

  constructor(private http: HttpClient) { }

  add(user: User) {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let json = JSON.stringify(user);
    return this.http.post<any>(this.url_base + Contants.INSERT_USER, json, options);
  }

}
