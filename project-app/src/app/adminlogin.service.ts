import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from './_interfaces/login.model';
import { AuthenticatedResponse } from './_interfaces/authenticated-response.model';
import { AdminModel } from './adminlogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/Auth/login'; // Change this to your API URL

  constructor(private http: HttpClient) {}

  login(credentials: AdminModel): Observable<AuthenticatedResponse> {
    return this.http.post<AuthenticatedResponse>(`${this.apiUrl}`, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
