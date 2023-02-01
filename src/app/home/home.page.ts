import { Component } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { BooksModalPage } from '../books-modal/books-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authors: any;
  booksOff:any;
  
slideOps= {
  initialSlide: 2,
  slidesPerView:3,
  centeredSlides: true,
  speed:400,
}
constructor(
  private librabyService: LibraryService,
  private modalController: ModalController,
  private navCtrl:NavController,
  private menu: MenuController
  ){}

ionViewDidEnter(){
  this.librabyService.getAuthors().then( res => {
    this.authors = res;
  })
  this.booksOff= this.librabyService.getBooksOffline();
  console.log(this.booksOff.books)
}

 async showBooks(author:any) {
let books_list:any;
  const modal = await this.modalController.create({
    component: BooksModalPage,
    componentProps: {
      books: books_list,
      author: author.name

    }

  });
  return await modal.present();

 }

 goToAuthors(){
  this.navCtrl.navigateRoot("/menu/authors");
  this.menu.close();
}
goToBooks(){
  this.navCtrl.navigateForward("/menu/books");
  this.menu.close();
}

goToMyFavorites(){
  this.navCtrl.navigateForward("/menu/favorite-books");
  this.menu.close();
}

}

