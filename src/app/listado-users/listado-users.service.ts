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

deleteUser(userId: number): Observable<any> {
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  const url = `${this.urlBase}${Contants.DELETE_USER.replace(':id', userId.toString())}`;
  return this.http.delete<any>(url, options)
    .pipe(
      catchError(error => {
        console.error('Error al eliminar el usuario:', error);
        return throwError(error);
      })
    );
}



}
