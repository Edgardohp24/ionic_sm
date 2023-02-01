import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: any;
  

  constructor(private libraryService: LibraryService, private menu: MenuController, private modalController: ModalController) { }

  ngOnInit() {
    this.libraryService.getBooks().then(books => {
      this.books = books;
      this.menu.close();
    })
  }

   async showBook(books: any){
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        books: books
      }
    });
    return await modal.present();

    }


}
