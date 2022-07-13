import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { GoogleBooksService } from './books-list/google-books.service';
import {
  addBook,
  fetchBooksSucessfull,
  removeBook,
} from './state/books.actions';
import { booksSelector, selectBookCollection } from './state/books.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books$ = this.store.select(booksSelector);
  bookCollection$ = this.store.select(selectBookCollection);
  constructor(
    private store: Store,
    private googleBooksService: GoogleBooksService
  ) {}
  onAdd(id: string) {
    this.store.dispatch(addBook({ id }));
  }
  onRemove(id: string) {
    this.store.dispatch(removeBook({ id }));
  }

  ngOnInit() {
    this.googleBooksService
      .getBooks()
      .pipe(
        map((books) => {
          this.store.dispatch(fetchBooksSucessfull({ books }));
        })
      )
      .subscribe();
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
