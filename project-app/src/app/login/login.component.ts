import { Component } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    UserName: '',
    Password: '',
  };

  constructor(private authService: UserloginService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        this.authService.saveToken(response.token); // Save the token

        // Fetch user details after login
        this.authService.getUserDetails().subscribe(
          (userDetails) => {
            // Find the logged-in user by UserName
            const currentUser = userDetails.find(user => user.UserName === this.credentials.UserName);
            if (currentUser) {
              alert(`Login successful! Your User ID is: ${currentUser.UserId}`);
            } else {
              alert('Login successful, but user details could not be found.');
            }
          },
          (error) => {
            console.error('Error fetching user details:', error);
            alert('Login successful, but failed to fetch user details.');
          }
        );

        this.router.navigate(['/']); // Redirect to the home page or desired route
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.'); // Optional error message
      }
    );
  }
}


// import { Component } from '@angular/core';
// import { UserloginService } from '../userlogin.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   credentials = {
//     UserName: '',
//     Password: '',
//   };

//   constructor(private authService: UserloginService, private router: Router) {}

//   login() {
//     this.authService.login(this.credentials).subscribe(
//       (response: any) => {
//         console.log('Login successful:', response);
//         this.authService.saveToken(response.token); // Save the token
//         this.router.navigate(['/']);
//       },
//       (error) => {
//         console.error('Login failed:', error);
//       }
//     );
//   }
// }