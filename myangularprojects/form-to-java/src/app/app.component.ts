import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private dataService: DataService) {}

  onSubmit(): void {
    this.dataService.sendData(this.formData).subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }
}
