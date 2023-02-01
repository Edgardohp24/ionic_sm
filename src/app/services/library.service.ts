import { Injectable } from '@angular/core';
import * as booksOffline from "./books.json";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  urlServer = "https://librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };
  authors: any;
  constructor(private http: HttpClient) { }

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
 
 getBooks(){
  return fetch(`${this.urlServer}books`).then(
    allBooks => allBooks.json()
  );
}
getCheckLikeBook(user_id: any, book_id: any){

  return this.http.get(`${this.urlServer}check_favorite?user_id=${user_id}&book_id=${book_id}`)

}
likeBook(user_id: any, book_id: any){
  let params = {
    "favorite_book": {
      "user_id": user_id,
      "book_id": book_id
    }
  }
  return this.http.post(`${this.urlServer}favorite_books`,params, this.httpHeaders)
}
disLike(user_id: any, book_id: any){
  let params = {
    "favorite_book": {
      "user_id": user_id,
      "book_id": book_id
    }
  }
  return this.http.post(`${this.urlServer}dislike`, params, this.httpHeaders)
}

 }
