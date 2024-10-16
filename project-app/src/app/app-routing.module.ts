import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PackageDisplayComponent } from './package-display/package-display.component';
import { PackageService } from './package.service';
import { PackageCreateComponent } from './package-create/package-create.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { PackagesUserDisplayComponent } from './packages-user-display/packages-user-display.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsofservicesComponent } from './termsofservices/termsofservices.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
import { KeralaComponent } from './kerala/kerala.component';
import { GoaComponent } from './goa/goa.component';
import { DelhiComponent } from './delhi/delhi.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { TravelinsuranceComponent } from './travelinsurance/travelinsurance.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'package-display',component:PackageDisplayComponent },
  { path: 'package-create', component:PackageCreateComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'booking-list',component:BookingListComponent},
  {path:'booking-form',component:BookingFormComponent},
  {path:'feedback-list',component:FeedbackListComponent},
  {path:'feedback-form',component:FeedbackFormComponent},
  // {path:'admin-validate',component:AdminValidateComponent},
  {path:'packages-user-display',component:PackagesUserDisplayComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'termsofservices',component:TermsofservicesComponent},
  {path:'faqs',component:FaqsComponent},
  {path:'blog',component:BlogComponent},
  {path:'kerala',component:KeralaComponent},
  {path:'goa',component:GoaComponent},
  {path:'delhi',component:DelhiComponent},
  {path:'admin-panel',component:AdminPanelComponent},
  {path:'travelinsurance',component:TravelinsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
