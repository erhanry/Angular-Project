import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/books/book.service';
import { CategoryService } from '../category.service';
import { Category } from 'src/app/types/category';
import { Book } from 'src/app/types/books';

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
  styleUrls: ['./current-category.component.css'],
})
export class CurrentCategoryComponent implements OnInit {
  categorys = [] as Category[];
  books = [] as Book[];
  pageTitle: string = 'Книги';

  constructor(
    private activeRoute: ActivatedRoute,
    private bookService: BookService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.activeRoute.params.subscribe((data) => {
      const categoryPath = data['categoryPath'];

      this.categoryService.getCategory().subscribe({
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
