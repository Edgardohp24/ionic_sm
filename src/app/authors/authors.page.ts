import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {
  authors: any;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.libraryService.getAuthors().then( res => {
      this.authors = res;
      console.log(this.authors)
    })
  }

}
