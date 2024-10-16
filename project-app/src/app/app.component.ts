import { Component } from '@angular/core';
import { UserloginService } from './userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-app';
  constructor(public userloginService: UserloginService, private router: Router) {} // Use the same name here

  logout() {
    this.userloginService.logout(); // Reference it with the same variable name
    this.router.navigate(['/']); // Redirect to home after logout
  }
}
