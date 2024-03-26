import { Component } from '@angular/core';
import { Category } from 'src/app/types/category';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  categorys: Category[] | undefined;

  constructor(private sidebarService: SidebarService) {
    this.categorys = this.sidebarService.categorys!;
  }
}
