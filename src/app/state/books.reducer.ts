import { createReducer, on } from '@ngrx/store';
import { Book } from '../books-list/book.model';
import { fetchBooksSucessfull } from './books.actions';

const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(fetchBooksSucessfull, (state, { books }) => books)
);
