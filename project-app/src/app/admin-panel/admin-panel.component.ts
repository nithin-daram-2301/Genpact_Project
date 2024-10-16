import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  constructor(private router: Router) {}

  logOut() {
    localStorage.removeItem('jwt'); // Clear the JWT from local storage
    this.router.navigate(['/admin-login']); // Redirect to the login page
  }
  isUserAuthenticated(): boolean {
    return !!localStorage.getItem('jwt'); // Check if the user is authenticated
  }
}
