import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(movies: any[], text: string): any[] {
    if (!text) return movies;

    return movies.filter((movie) =>
      movie.title.toUpperCase().includes(text.toUpperCase())
    );
  }
}
