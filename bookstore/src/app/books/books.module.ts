import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CatalogBookComponent } from './catalog-book/catalog-book.component';
import { CurrentBookComponent } from './current-book/current-book.component';

@NgModule({
  declarations: [
    EditBookComponent,
    CreateBookComponent,
    CatalogBookComponent,
    CurrentBookComponent
  ],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
