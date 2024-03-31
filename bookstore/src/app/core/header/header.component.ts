import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { ErrorService } from '../error.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isToggleNavbar: boolean = false;
  isToggleSearch: boolean = false;
  errorMsg = '';

  constructor(
    private userService: UserService,
    private errorService: ErrorService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  get username() {
    return this.userService.user;
  }

  ngOnInit(): void {
    this.errorService.apiError$.subscribe((message: string | null) => {
      this.errorMsg = message || '';
      this.isToggleSearch = false;
    });
  }

  searchForm = this.fb.group({
    select: ['title'],
    search: ['', [Validators.required, Validators.maxLength(50)]],
  });

  get isSearchdValid() {
    const field = this.searchForm.get('search');

    const Obj = {
      touched: false,
      required: false,
      maxLength: false,
      css: false,
    };

    if (field?.touched) {
      Obj.touched = true;
      Obj.required = !!field?.errors?.['required'];
      Obj.css = Obj.required || Obj.maxLength;
    }

    return Obj;
  }

  searchHandler() {
    if (this.searchForm.invalid) {
      return;
    }
    const { select, search } = this.searchForm.value;

    this.isToggleSearch = false;
    this.searchForm.reset({ select });

    this.router.navigate(['/books/search/'], {
      queryParams: { [select!]: search },
    });
  }

  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: () => {
        this.router.navigate(['/home']);
      },
    });
  }

  showNavbar() {
    this.isToggleNavbar = !this.isToggleNavbar;
  }

  showSearch() {
    this.errorMsg = '';
    this.isToggleSearch = !this.isToggleSearch;
  }
}
