import { Injectable } from '@angular/core';
import { Contants } from '../constants/constants';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class RegistrarBooksService {

  url_base = environment.API_URL

  constructor(private http: HttpClient) { }

  add(book: Book) {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let json = JSON.stringify(book);
    return this.http.post<any>(this.url_base + Contants.INSERT_BOOK, json, options);
  }


}
