import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../books-list/book.model';

export const booksSelector =
  createFeatureSelector<ReadonlyArray<Book>>('books');
export const collectionSelector =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  booksSelector,
  collectionSelector,
  (books, collection) => {
    return collection.map((id) => {
      return books.find((book) => {
        return book.id === id;
      });
    });
  }
);
