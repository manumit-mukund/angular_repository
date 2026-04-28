import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;

  showDiv1() {

    this.isDiv1Visible = true;
  }


  hideDiv1() {

    this.isDiv1Visible = false;

  }

  toggleDiv2() {

    this.isDiv2Visible = !this.isDiv2Visible;

    // if (this.isDiv2Visible == true) {

    //   this.isDiv2Visible = false;

    // } else {

    //   this.isDiv2Visible = true;

    // }

  }


}
