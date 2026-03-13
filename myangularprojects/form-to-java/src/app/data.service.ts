import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api/saveData'; // Replace with your Java API endpoint

  constructor(private http: HttpClient) { }

  // Method to send the form data as a JSON object
  sendData(data: any): Observable<any> {
    // Angular's HttpClient automatically sets the Content-Type to application/json
    return this.http.post(this.apiUrl, data);
  }
}
