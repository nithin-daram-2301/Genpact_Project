import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../adminlogin.service';// Adjust the path as necessary
import { LoginModel } from '../_interfaces/login.model';
import { AuthenticatedResponse } from '../_interfaces/authenticated-response.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  credentials: LoginModel = { UserName: '', Password: '' };
  invalidLogin = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response: AuthenticatedResponse) => {
        localStorage.setItem('jwt', response.token);
        this.invalidLogin = false;
        this.router.navigate(['/admin-panel']); // Redirect to the desired route
      },
      error: () => {
        this.invalidLogin = true;
      }
    });
  }
  logOut() {
    localStorage.removeItem('jwt'); // Clear the JWT from local storage
    this.router.navigate(['/admin-login']); // Redirect to the login page
  }
  isUserAuthenticated(): boolean {
    return !!localStorage.getItem('jwt'); // Check if the user is authenticated
  }
}
