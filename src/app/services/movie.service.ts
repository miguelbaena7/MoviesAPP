import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';

@Injectable()
export class MovieService {
  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  private API_KEY = '3ec59a924096ada5bde74143fd25a0bc';

  constructor(private _http: HttpClient) {}

  public getMovies() {
    return this._http.get<Movie>(this.url + this.API_KEY);
  }
}
