import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CurrentCategoryComponent } from './current-category/current-category.component';
import { SharedModule } from '../shared/shared.module';
import { BookService } from '../books/book.service';

@NgModule({
  declarations: [CurrentCategoryComponent],
  imports: [CommonModule, CategoryRoutingModule, SharedModule],
  providers: [BookService],
})
export class CategoryModule {}
