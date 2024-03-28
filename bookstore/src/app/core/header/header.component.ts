import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/shared/sidebar.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isToggleNavbar: boolean = false;

  constructor(
    private sidebarSevice: SidebarService,
    private userService: UserService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.getCategory();
    this.getProfile();
  }

  getCategory() {
    this.sidebarSevice.getCategory().subscribe();
  }

  getProfile() {
    const cookie = document.cookie.split('=').includes('auth-cookie');

    if (!this.isLoggedIn && cookie) {
      this.userService.getProfile().subscribe();
    }
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
}
