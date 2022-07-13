import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from './books.actions';

const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(addBook, (state, { id }) => {
    if (state.indexOf(id) !== -1) {
      return state;
    }
    return [...state, id];
  }),
  on(removeBook, (state, { id }) => {
    if (state.indexOf(id) === -1) {
      return state;
    }
    return state.filter((_id) => {
      return _id !== id;
    });
  })
);
