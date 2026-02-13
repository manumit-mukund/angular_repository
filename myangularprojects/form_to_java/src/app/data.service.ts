import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Update with your Servlet's actual URL
  private servletUrl = 'http://localhost:8080/YourAppName/YourServletURL'; 

  constructor(private http: HttpClient) { }

  sendDataToServlet(data: any): Observable<any> {
    // Angular automatically serializes the object to JSON and sets the 
    // Content-Type header to application/json by default.
    return this.http.post(this.servletUrl, data);
  }
}
