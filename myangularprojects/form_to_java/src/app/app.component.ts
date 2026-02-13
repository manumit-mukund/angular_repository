import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  responseMessage: string = '';

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.dataService.sendDataToServlet(this.myForm.value).subscribe(
        response => {
          console.log('Servlet response:', response);
          this.responseMessage = 'Data sent successfully!';
        },
        error => {
          console.error('Error sending data:', error);
          this.responseMessage = 'Error sending data. Check console for details.';
        }
      );
    }
  }
}
