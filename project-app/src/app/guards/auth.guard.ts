// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate  {

//   constructor(private router:Router, private jwtHelper: JwtHelperService){}
  
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const token = localStorage.getItem("jwt");

//     if (token && !this.jwtHelper.isTokenExpired(token)){
//       console.log(this.jwtHelper.decodeToken(token))
//       return true;
//     }

//     this.router.navigate(["admin-login"]);
//     return false;
//   }
// }

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true; // Token is valid and not expired
    }

    // Redirect to login if token is invalid or expired
    this.router.navigate(['/admin-login']);
    return false;
  }
}
