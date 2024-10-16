import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-display',
  templateUrl: './package-display.component.html',
  styleUrl: './package-display.component.css'
})
export class PackageDisplayComponent implements OnInit{
  packages: Package[] = [];

  constructor(public packageService:PackageService){}
  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages(): void {
    this.packageService.getPackages().subscribe((data) => {
      this.packages = data;
    });
  }

  deletePackage(PackageId: number): void {
    this.packageService.deletePackage(PackageId).subscribe(() => {
      this.loadPackages(); // Refresh package list
      alert('Package deleted successfully!');
    });
  }
}
