import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isToggleNavbar: boolean = false;

  showNavbar() {
    this.isToggleNavbar = !this.isToggleNavbar;
  }
}
