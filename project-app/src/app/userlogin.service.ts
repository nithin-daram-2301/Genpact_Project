import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
private apiUrl='http://localhost:5000/api/Auth';
  constructor(private http:HttpClient) { }
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Register/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login/login`, credentials);
  }

  logout(): void {
    localStorage.removeItem('token'); // Simple logout; clear token from local storage
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if token exists
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token); // Store token in local storage
  }
  // getUserDetails(): Observable<any> {
  //   return this.http.get(`http://localhost:5000/api/Users`);
  // }
  getUserDetails(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(`${this.apiUrl}/GetUsers`, { headers });
  }
  
}
