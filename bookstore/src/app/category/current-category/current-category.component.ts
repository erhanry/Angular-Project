import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/books/book.service';
import { Category } from 'src/app/types/category';
import { Book } from 'src/app/types/books';
import { SidebarService } from 'src/app/shared/sidebar.service';

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
})
export class CurrentCategoryComponent implements OnInit {
  categorys = [] as Category[];
  books = [] as Book[];
  pageTitle: string = 'Книги';

  constructor(
    private activeRoute: ActivatedRoute,
    private bookService: BookService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.getBoook();
  }

  getBoook() {
    this.categorys = this.sidebarService.categorys!;
    this.activeRoute.params.subscribe((data) => {
      const selectedCategory = this.categorys.find(
        (cat) => cat.path == data['categoryPath']
      );
      this.pageTitle = selectedCategory?.title!;
      this.bookService
        .getCategoryBook(selectedCategory?._id!)
        .subscribe((books) => {
          this.books = books;
        });
    });
  }
}
