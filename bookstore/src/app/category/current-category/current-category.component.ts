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
    private sidebarSevice: SidebarService
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.activeRoute.params.subscribe((data) => {
      const categoryPath = data['categoryPath'];

      this.sidebarSevice.getCategory().subscribe({
        next: (categorys) => {
          this.categorys = categorys;

          const categorySelected = categorys.find(
            (c) => c.path == categoryPath
          );
          this.pageTitle = categorySelected?.title!;
          this.bookService
            .getCategoryBook(categorySelected?._id!)
            .subscribe((books) => {
              this.books = books;
            });
        },
        error: (err) => {
          console.error('Error: ', err);
        },
      });
    });
  }
}
