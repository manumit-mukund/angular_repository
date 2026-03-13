import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // or ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // or ReactiveFormsModule
    HttpClientModule // Add it to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
