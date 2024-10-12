import { Component } from '@angular/core';
import { PackageService } from '../package.service';
import { Package } from '../package.model';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  packages: Package[] = [];
  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages(): void {
    this.packageService.getPackages().subscribe(data => {
      this.packages = data;
    });
  }

  deletePackage(id: number): void {
    this.packageService.deletePackage(id).subscribe(() => {
      this.loadPackages(); // Refresh the list after deletion
    });
  }
}
