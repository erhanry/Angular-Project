import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then((module) => module.BooksModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then(
        (module) => module.CategoryModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./user/user.module').then((module) => module.UserModule),
  },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
