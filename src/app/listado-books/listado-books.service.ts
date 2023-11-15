import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Contants } from '../constants/constants';
import { Observable, catchError, throwError } from 'rxjs';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class ListadoBooksService {

  
urlBase = environment.API_URL


constructor(private http: HttpClient) {

}

getNowBooks(): Observable<any> {
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


deleteBook(isbn: string): Observable<any> {
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  const url = `${this.urlBase}${Contants.DELETE_BOOK.replace(':isbn', isbn.toString())}`;
  return this.http.delete<any>(url, options)
    .pipe(
      catchError(error => {
        console.error('Error al eliminar el usuario:', error);
        return throwError(error);
      })
    );
}


updateBook(isbn: string, updatedBookData: Partial<Book>): Observable<any> {
  const url = `${this.urlBase}${Contants.UPDATE_BOOK.replace(':isbn', isbn.toString())}`;
  
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.http.put<any>(url, updatedBookData, options)
    .pipe(
      catchError(error => {
        console.error('Error al editar el libro:', error);
        return throwError(error);
      })
    );
}
}
