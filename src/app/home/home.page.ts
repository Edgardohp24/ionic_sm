import { Component } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authors: any;

  slideOps = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400
  }
  constructor(private libraryService: LibraryService) {}

  ionViewDidEnter(){
    this.libraryService.getAuthors().then( res => {
      this.authors = res.data;
      console.log(this.authors)
    })
  }

}

