import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageCreateComponent } from './package-create/package-create.component';
import { PackageEditComponent } from './package-edit/package-edit.component';

const routes: Routes = [
  { path: 'packages', component: PackageListComponent },
  { path: 'packages/create', component: PackageCreateComponent },
  { path: 'packages/edit/:id', component: PackageEditComponent },
  { path: '', redirectTo: '/packages', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
