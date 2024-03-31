import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/types/books';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent {
  categorys = [] as Category[];

  constructor(private bookService: BookService, private router: Router) {}

  @ViewChild('createForm') createForm: NgForm | undefined;

  createSubmit(createForm: NgForm) {
    if (createForm.invalid) {
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
    } = createForm.value;

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

    this.bookService.createBook(newBook).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }

  get inputTitleValid() {
    const field = this.createForm?.control.get('title');

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
    const field = this.createForm?.control.get('author');

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
    const field = this.createForm?.control.get('publisher');

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
    const field = this.createForm?.control.get('price');

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
    const field = this.createForm?.control.get('year');

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
    const field = this.createForm?.control.get('imgUrl');

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
    const field = this.createForm?.control.get('description');

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
