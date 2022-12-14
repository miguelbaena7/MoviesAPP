import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(100))
      .subscribe((value) => this.searchEmitter.emit(value));
  }

  search = new FormControl('');

  @Output('search') searchEmitter = new EventEmitter<any>();
}
