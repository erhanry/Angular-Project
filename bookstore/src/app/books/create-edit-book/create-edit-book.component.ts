import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/types/books';
import { Category } from 'src/app/types/category';
import { first } from 'rxjs';
import { SidebarService } from 'src/app/shared/sidebar.service';

@Component({
  selector: 'app-create-edit-book',
  templateUrl: './create-edit-book.component.html',
})
export class CreateEditBookComponent implements OnInit {
  categorys = [] as Category[];
  pageTitle = 'Нова Книга';
  bookId = '';

  constructor(
    private bookService: BookService,
    private router: Router,
    private sidebarService: SidebarService,
    private route: ActivatedRoute
  ) {}

  @ViewChild('form') form: NgForm | undefined;

  ngOnInit(): void {
    this.categorys = this.sidebarService.categorys!;
    this.setValue();
  }

  setValue() {
    this.bookId = this.route.snapshot.params['bookId'];

    if (this.bookId) {
      this.pageTitle = 'Редакция';

      this.bookService
        .getBook(this.bookId)
        .pipe(first())
        .subscribe((data) => {
          this.form?.setValue({
            title: data.title,
            author: data.author,
            publisher: data.publisher,
            price: data.price,
            year: data.year,
            category: data.category,
            language: data.language,
            news: data.news,
            sale: data.sale,
            imgUrl: data.imgUrl,
            description: data.description,
          });
        });
    }
  }

  submitForm(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const {
      title,
      author,
      publisher,
      price,
      year,
      category,
      language,
      sale,
      news,
      imgUrl,
      description,
    } = form.value;

    const newBook = {
      title,
      author,
      publisher,
      price,
      year,
      category,
      language,
      sale,
      news,
      imgUrl,
      description,
    } as Book;

    if (this.bookId) {
      this.bookService.editBook(this.bookId, newBook).subscribe(() => {
        this.router.navigate(['/books', this.bookId]);
      });
    } else {
      this.bookService.createBook(newBook).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  get inputTitleValid() {
    const field = this.form?.control.get('title');

    const Obj = {
      touched: false,
      required: false,
      minLength: false,
      css: false,
    };

    if (field?.touched) {
      Obj.touched = true;
      Obj.required = !!field?.errors?.['required'];
      Obj.minLength = !!field?.errors?.['minlength'];
      Obj.css = Obj.required || Obj.minLength;
    }

    return Obj;
  }

  get inputAuthorValid() {
    const field = this.form?.control.get('author');

    const Obj = {
      touched: false,
      required: false,
      minLength: false,
      css: false,
    };

    if (field?.touched) {
      Obj.touched = true;
      Obj.required = !!field?.errors?.['required'];
      Obj.minLength = !!field?.errors?.['minlength'];
      Obj.css = Obj.required || Obj.minLength;
    }

    return Obj;
  }

  get inputPublisherValid() {
    const field = this.form?.control.get('publisher');

    const Obj = {
      touched: false,
      required: false,
      minLength: false,
      css: false,
    };

    if (field?.touched) {
      Obj.touched = true;
      Obj.required = !!field?.errors?.['required'];
      Obj.minLength = !!field?.errors?.['minlength'];
      Obj.css = Obj.required || Obj.minLength;
    }

    return Obj;
  }

  get inputPriceValid() {
    const field = this.form?.control.get('price');

    const Obj = {
      touched: false,
      required: false,
      min: false,
      css: false,
    };

    if (field?.touched) {
      Obj.touched = true;
      Obj.required = !!field?.errors?.['required'];
      Obj.min = !!field?.errors?.['min'];
      Obj.css = Obj.required || Obj.min;
    }

    return Obj;
  }
  get inputYearValid() {
    const field = this.form?.control.get('year');

    const Obj = {
      touched: false,
      required: false,
      valid: false,
      css: false,
    };

    if (field?.touched) {
      Obj.touched = true;
      Obj.required = !!field?.errors?.['required'];
      Obj.valid = !!field?.errors?.['min'] || !!field?.errors?.['max'];
      Obj.css = Obj.required || Obj.valid;
    }

    return Obj;
  }

  get inputImgUrlValid() {
    const field = this.form?.control.get('imgUrl');

    const Obj = {
      dirty: false,
      invalidImgUrl: false,
      css: false,
    };

    if (field?.dirty) {
      Obj.dirty = true;
      Obj.invalidImgUrl = !!field?.errors?.['invalidImgUrl'];
      Obj.css = Obj.invalidImgUrl;
    }

    return Obj;
  }
  get descriptionValid() {
    const field = this.form?.control.get('description');

    const Obj = {
      touched: false,
      minLength: false,
      maxLength: false,
      css: false,
    };

    if (field?.touched) {
      Obj.touched = true;
      Obj.minLength = !!field?.errors?.['minlength'];
      Obj.maxLength = !!field?.errors?.['maxlength'];
      Obj.css = Obj.minLength || Obj.maxLength;
    }

    return Obj;
  }
}
