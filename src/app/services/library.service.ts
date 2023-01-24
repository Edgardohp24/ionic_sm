import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }

  getAuthors() {
    return fetch("https://api.plos.org/search?q=title:DNA").then(
      response => response.json()
    );
}

}