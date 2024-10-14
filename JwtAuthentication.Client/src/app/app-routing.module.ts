import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { PackageEditComponent } from './package-edit/package-edit.component';
import { PackageCreateComponent } from './package-create/package-create.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from './guards/auth.guard';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { FeedbackFromComponent } from './feedback-from/feedback-from.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'packages', component: PackagesComponent ,canActivate:[AuthGuard]},
  { path: 'packages1', component: PackagesComponent},
  { path: 'register', component: UserRegisterComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  {path:'footer',component:FooterComponent},
  {path:'package-edit',component:PackageEditComponent,canActivate:[AuthGuard]},
  {path:'package-create',component:PackageCreateComponent,canActivate:[AuthGuard]},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'booking-list',component:BookingListComponent},
  {path:'booking-form',component:BookingFormComponent},
  {path:'feedback-from',component:FeedbackFromComponent},
  {path:'feedback-list',component:FeedbackListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
