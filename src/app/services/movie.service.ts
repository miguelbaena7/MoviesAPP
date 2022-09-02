import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  private API_KEY = '3ec59a924096ada5bde74143fd25a0bc';

  constructor(private _http: HttpClient) {}

  public getMovies(): Observable<any> {
    return this._http.get(this.url + this.API_KEY);
  }
}
