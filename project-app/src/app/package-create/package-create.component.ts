import { Component, OnInit } from '@angular/core';
import { Package } from '../package.model';
import { PackageService } from '../package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrl: './package-create.component.css'
})
export class PackageCreateComponent{


  // createPackage(): void {
  //   this.packageService.createPackage(this.package).subscribe(
  //     () => {
  //       alert('Package created successfully!');
  //       this.router.navigate(['/packages']); // Navigate to the display component after creation
  //     },
  //     (error) => {
  //       console.error('Error creating package', error);
  //       alert('Failed to create package. Please try again.');
  //     }
  //   );
  // }
  // createPackage(): void {
  //   console.log(this.package); // Log the package object
  //   this.packageService.createPackage(this.package).subscribe(
  //     () => {
  //       alert('Package created successfully!');
  //       this.router.navigate(['/package-display']);
  //     },
  //     (error) => {
  //       console.error('Error creating package', error);
  //       alert('Failed to create package. Please try again.');
  //     }
  //   );
  // }
  // package: Package = {PackageId:0, Title: '', ImageName: '', Description: '', Price: 0,Duration:''};

  // constructor(private PackageService: PackageService, private router: Router) {}

  // createPackage(): void {
  //   this.PackageService.createPackage(this.package).subscribe(() => {
  //     this.router.navigate(['/packages']); // Redirect to the package list
  //   });
  // }
  package: Package = { PackageId: 0, Title: '', ImageName: '', Description: '', Price: 0, Duration: '' };

  constructor(private PackageService: PackageService, private router: Router) {}

  createPackage(): void {
    this.PackageService.createPackage(this.package).subscribe(
      () => {
        alert('Package created successfully!'); // Alert message on success
        this.router.navigate(['/package-display']); // Redirect to the package list
      },
      (error) => {
        console.error('Error creating package', error);
        alert('Failed to create package. Please try again.'); // Alert message on error
      }
    );
  }

}
