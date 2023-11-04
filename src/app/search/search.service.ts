import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Contants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  urlBase = environment.API_URL

  constructor(private http: HttpClient) {

  }

  getSeachBook(keyword: string) {
    const options = {
      headers: {
        'content-type': 'application/json',
      }
    }
    return this.http.get<any>(this.urlBase + Contants.SEARCH_MOVIE + "?name=" + keyword, options)
  }
}
