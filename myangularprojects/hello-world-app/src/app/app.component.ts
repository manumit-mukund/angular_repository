import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // The custom HTML tag used to place this component.
  standalone: true,     // Marks the component as standalone (modern Angular approach).
  imports: [RouterOutlet], // Imports necessary modules/components.
  template: `            
    <h1>{{ title }}</h1>
    <p>Welcome to your first Angular app!</p>
  `,                     // The inline HTML template.
  styleUrl: './app.component.css' // Link to the component's specific CSS file.
})
export class AppComponent {
  title = 'Hello World!'; // A property available for binding in the template.
}
