import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  courseName: string = "Angular 18";
  stateNane: string = "Maharashtra";
  inputType = "checkbox";
  myClassName: string = "bg-primary";
  rollNo: number = 101;
  isInidan: boolean = true;
  courseDate: Date = new Date();

  firstName = signal("Manu Signal");

  constructor() {    

   }

   showAlert(message: string) {

      alert (message);

   }

   changeCourseName() {

      this.courseName = "Angular 18 with TypeScript";
   }

}
