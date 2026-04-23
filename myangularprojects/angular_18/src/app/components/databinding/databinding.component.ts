import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  courseName: string = "Angular 18";

  inputType = "checkbox";

  myClassName: string = "bg-primary";

  rollNo: number = 101;

  isInidan: boolean = true;

  courseDate: Date = new Date();

  constructor() {    

   }

   showAlert(message: string) {

      alert (message);

   }

   changeCourseName() {

      this.courseName = "Angular 18 with TypeScript";
   }

}
