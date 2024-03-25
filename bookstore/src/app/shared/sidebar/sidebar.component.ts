import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/types/category';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  categorys: Category[] | undefined;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService
      .getCategory()
      .subscribe((categorys) => (this.categorys = categorys));
  }
}
