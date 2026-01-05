// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    standalone: true,
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent {
  items = [
    { id: 1, name: 'Item A', description: 'Description for Item A' },
    { id: 2, name: 'Item B', description: 'Description for Item B' },
    { id: 3, name: 'Item C', description: 'Description for Item C' }
  ];
}