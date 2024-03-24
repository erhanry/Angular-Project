import { Component, Input } from '@angular/core';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input('categorys') categorys: Category | any;
}
