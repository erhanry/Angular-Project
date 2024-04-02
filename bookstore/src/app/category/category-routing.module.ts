import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentCategoryComponent } from './current-category/current-category.component';

const routes: Routes = [
  { path: ':categoryPath', component: CurrentCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
