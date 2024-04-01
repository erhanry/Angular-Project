import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditBookComponent } from './create-edit-book/create-edit-book.component';
import { CatalogBookComponent } from './catalog-book/catalog-book.component';
import { CurrentBookComponent } from './current-book/current-book.component';
import { authGuard } from '../guard/auth.guard';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CatalogBookComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'edit/:bookId',
    component: CreateEditBookComponent,
    canActivate: [authGuard],
  },
  {
    path: 'create',
    component: CreateEditBookComponent,
    canActivate: [authGuard],
  },
  { path: ':bookId', component: CurrentBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
