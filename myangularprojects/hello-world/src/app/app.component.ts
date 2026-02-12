import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';

export interface Item {

  id: number;
  name: string;

}

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [NgFor, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})

export class AppComponent {

  title = 'My Title';

  items: Item[] = [

    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' }
    
  ];

}
