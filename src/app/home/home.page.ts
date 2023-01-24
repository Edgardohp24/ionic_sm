import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authors: any;

  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  }
 
  constructor(private navCtrl: NavController, private libraryService: LibraryService) {}
 
  goTointro(){
    this.navCtrl.navigateForward('/intro');
  }

  ionViewDidEnter(){
    this.libraryService.getAuthors().then( res => {
      this.authors = res.data;
      console.log(this.authors)
    })
  }

}

