import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../package.service';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.css']
})
export class PackageCreateComponent {
  package: Package = { title: '', imageName: '', description: '', price: 0 };

  constructor(private packageService: PackageService, private router: Router) {}

  createPackage(): void {
    this.packageService.createPackage(this.package).subscribe(() => {
      this.router.navigate(['/packages']); // Redirect to the package list
    });
  }
}
