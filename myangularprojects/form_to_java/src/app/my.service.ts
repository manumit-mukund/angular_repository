import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private servletUrl = 'http://localhost:8080/YourAppName/ProcessFormServlet'; // Replace with your actual servlet URL

  constructor(private http: HttpClient) { }

  sendDataToServlet(formData: any): Observable<any> {
    // Angular's HttpClient sends the data as JSON by default.
    return this.http.post<any>(this.servletUrl, formData);
  }
}
