import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService],
})
export class AppComponent implements OnInit {
  public movies: Movie[];
  public query = '';
  public details: any[] = [];

  constructor(private _movieService: MovieService) {
    this.movies = [];
  }

  ngOnInit() {
    this._movieService.getMovies().subscribe((movies: any) => {
      this.movies = movies.results;
    });
  }

  handleSearch(value: string) {
    this.query = value;
  }

  getDetails(id: number) {
    this.details = this.movies.filter((movie) => movie.id === id);
  }
}
