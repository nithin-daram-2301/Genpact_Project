import { Component } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    UserName: '',
    Password: '',
    Email: '',
    Mobile: '',
  };

  constructor(private authService: UserloginService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
// import { Component } from '@angular/core';
// import { UserloginService } from '../userlogin.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   user = {
//     UserName: '',
//     Password: '',
//     Email: '',
//     Mobile: '',
//   };

//   registeredUser: any; // Variable to store user details after registration

//   constructor(private authService: UserloginService, private router: Router) {}

//   register() {
//     this.authService.register(this.user).subscribe(
//       (response) => {
//         console.log('Registration successful:', response);
//         // After registration, fetch user details using getUserDetails
//         this.authService.getUserDetails().subscribe(
//           (userDetails) => {
//             this.registeredUser = userDetails; // Store user details
//             alert(`Registration successful! Your User ID is: ${this.registeredUser.UserId}`);
//           },
//           (error) => {
//             console.error('Error fetching user details:', error);
//             alert('Registration successful, but failed to fetch user details.');
//           }
//         );
//         this.router.navigate(['/login']); // Navigate to the login page or another page if needed
//       },
//       (error) => {
//         console.error('Registration failed:', error);
//         alert('Registration failed. Please try again.'); // Optional error message
//       }
//     );
//   }


