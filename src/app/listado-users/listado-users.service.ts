import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Contants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ListadoUsersService {

urlBase = environment.API_URL


constructor(private http: HttpClient) {

}

getNowUsers(): Observable<any> {
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.get<any>(this.urlBase + Contants.GET_ALL_USERS, options)
    .pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
}
}
