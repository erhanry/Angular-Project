import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CatalogBookComponent } from './catalog-book/catalog-book.component';
import { CurrentBookComponent } from './current-book/current-book.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CatalogBookComponent },
  { path: 'edit', component: EditBookComponent },
  { path: 'create', component: CreateBookComponent },
  { path: ':bookId', component: CurrentBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
