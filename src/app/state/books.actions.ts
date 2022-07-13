import { createAction, props } from '@ngrx/store';
import { Book } from '../books-list/book.model';

export const addBook = createAction(
  '[Books List Component] add book',
  props<{ id: string }>()
);

export const removeBook = createAction(
  '[Books List Component] remove book',
  props<{ id: string }>()
);

export const fetchBooksSucessfull = createAction(
  '[Books API] fetch books successfull',
  props<{ books: ReadonlyArray<Book> }>()
);
