import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { CreateEditBookComponent } from './create-edit-book/create-edit-book.component';
import { CatalogBookComponent } from './catalog-book/catalog-book.component';
import { CurrentBookComponent } from './current-book/current-book.component';
import { SharedModule } from '../shared/shared.module';
import { BookService } from './book.service';
import { FormsModule } from '@angular/forms';
import { ImageDirective } from './directive/image.directive';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    CreateEditBookComponent,
    CatalogBookComponent,
    CurrentBookComponent,
    ImageDirective,
    SearchComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, SharedModule, FormsModule],
  providers: [BookService],
})
export class BooksModule {}
