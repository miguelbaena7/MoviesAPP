import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  handleSearch(value: string) {
    this.query = value;
  }

  query = '';

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http
      .get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_KEY)
      .subscribe((movies: any) => {
        this.movies = movies.results;
      });
  }

  getDetails(id: number) {
    this.details = this.movies.filter((movie) => movie.id === id);
  }

  movies: any[] = [];
  details: any[] = [];
  API_KEY = '3ec59a924096ada5bde74143fd25a0bc';
}
