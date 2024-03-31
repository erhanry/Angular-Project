import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { ErrorService } from '../error.service';

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
    private router: Router
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
