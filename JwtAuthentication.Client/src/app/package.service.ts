import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Package } from './package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl = 'https://localhost:44379/api/Packages'; // Adjust to your API URL

  constructor(private http: HttpClient) {}

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(this.apiUrl);
  }

  getPackage(id: number): Observable<Package> {
    return this.http.get<Package>(`${this.apiUrl}/${id}`);
  }

  createPackage(packageData: Package): Observable<Package> {
    return this.http.post<Package>(this.apiUrl, packageData);
  }

  updatePackage(packageData: Package): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${packageData.id}`, packageData);
  }

  deletePackage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
