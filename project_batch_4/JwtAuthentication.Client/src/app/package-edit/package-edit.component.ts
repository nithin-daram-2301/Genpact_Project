import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../package.service';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.css']
})
export class PackageEditComponent implements OnInit {
  package: Package = { title: '', imageName: '', description: '', price: 0 };
  id: number=0;

  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.packageService.getPackage(this.id).subscribe(data => {
      this.package = data;
    });
  }

  updatePackage(): void {
    this.packageService.updatePackage(this.package).subscribe(() => {
      this.router.navigate(['/packages']);
    });
  }
}
