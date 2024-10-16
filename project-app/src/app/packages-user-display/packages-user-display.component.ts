import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from '../package.model';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-packages-user-display',
  templateUrl: './packages-user-display.component.html',
  styleUrl: './packages-user-display.component.css'
})
export class PackagesUserDisplayComponent implements OnInit {
  packages: Package[] = [];
  constructor(public objs:PackageService,public router:Router) {}
  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages(): void {
    this.objs.getPackages().subscribe((data) => {
      this.packages = data;
    });
  }

  bookPackage(packageId: number) {
    // Navigate to the booking form, passing the packageId if needed
    this.router.navigate(['/booking-form', { id: packageId }]);
  }
}