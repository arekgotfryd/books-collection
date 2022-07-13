import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  constructor(private httpClient: HttpClient) {}

  getBooks = (): Observable<Array<Book>> => {
    return this.httpClient
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(
        tap((books) => {
          console.log;
        }),
        map((books) => books.items || [])
      );
  };
}
