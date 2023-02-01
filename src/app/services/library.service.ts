import { Injectable } from '@angular/core';
import * as booksOffline from "./books.json";
@Injectable({
  providedIn: 'root'
})
export class LibraryService {
 
  constructor() { }

  getAuthors() {
    return fetch("https://librarypca.fly.dev/authors").then(
      response => response.json()
    );
}
getBooksOffline(){
  return booksOffline;
}

 getBooksAuthor(author_id:any) {
  return fetch(`https://librarypca.fly.dev/books_authors?author_id=${author_id}` ).then(
    books => books.json()
  )
 }
 


 }
