import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Contants } from '../constants/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  urlBase = environment.API_URL

  constructor(private http: HttpClient) {

  }

  getNowPlaying(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<any>(this.urlBase + Contants.GET_ALL_BOOKS, options)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          return throwError(error);
        })
      );
  }
  
  
}

