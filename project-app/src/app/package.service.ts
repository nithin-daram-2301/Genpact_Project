import { Injectable } from '@angular/core';
import { Package } from './package.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
private apiUrl='http://localhost:5000/api/Packages';

constructor(private http:HttpClient) {}
createPackage(pkg: Package): Observable<Package> {
  return this.http.post<Package>(this.apiUrl, pkg);
}

// Get all packages
getPackages(): Observable<Package[]> {
  return this.http.get<Package[]>(this.apiUrl);
}

// Delete a package
deletePackage(PackageId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${PackageId}`);
}

  
}
