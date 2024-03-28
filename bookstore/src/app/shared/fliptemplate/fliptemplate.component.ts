import { Component, Input } from '@angular/core';
import { Book } from 'src/app/types/books';

@Component({
  selector: 'app-fliptemplate',
  templateUrl: './fliptemplate.component.html',
  styleUrls: ['./fliptemplate.component.css'],
})
export class FliptemplateComponent {
  @Input('flipBook') flipBook: Book | any;
}
