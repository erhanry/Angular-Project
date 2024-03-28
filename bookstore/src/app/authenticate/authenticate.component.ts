import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { SidebarService } from '../shared/sidebar.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;

  constructor(
    private userService: UserService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.setProfile();
    this.setCategory();
  }

  setProfile() {
    this.userService.getProfile().subscribe({
      next: () => {
        this.isAuthenticating = false;
      },
      error: () => {
        this.isAuthenticating = false;
      },
      complete: () => {
        this.isAuthenticating = false;
      },
    });
  }

  setCategory() {
    return this.sidebarService.getCategory().subscribe();
  }
}
