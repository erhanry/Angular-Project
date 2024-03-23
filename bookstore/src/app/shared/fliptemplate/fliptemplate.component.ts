import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/types/books';

@Component({
  selector: 'app-fliptemplate',
  templateUrl: './fliptemplate.component.html',
  styleUrls: ['./fliptemplate.component.css'],
})
export class FliptemplateComponent implements OnInit {
  @Input('flipBook') flipBook: Book | any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.flipBook);
  }
}
