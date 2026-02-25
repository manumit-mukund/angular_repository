import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyService } from './my.service'; // Create this service in the next step

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private myService: MyService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.myService.sendDataToServlet(this.myForm.value).subscribe(
        response => console.log('Servlet response:', response),
        error => console.error('Error:', error)
      );
    }
  }
}
