import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // The tag used in index.html
  standalone: true,      // Declares this as a standalone component
  template: `
    <h1>{{ title }}</h1>
    <p>Welcome to your first Angular 18 app!</p>
  `,
  styles: [`
    h1 {
      color: #333;
    }
  `]
})
export class App {
  title = 'My First Angular 18 App';
}
