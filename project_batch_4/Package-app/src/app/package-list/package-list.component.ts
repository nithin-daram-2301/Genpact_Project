import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
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
