import { Component } from '@angular/core';
import { SidebarService } from 'src/app/shared/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isToggleNavbar: boolean = false;

  constructor(private sidebarSevice: SidebarService) {
    this.sidebarSevice.getCategory().subscribe(() => {});
  }

  showNavbar() {
    this.isToggleNavbar = !this.isToggleNavbar;
  }
}
