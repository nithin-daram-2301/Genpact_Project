import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PackageDisplayComponent } from './package-display/package-display.component';
import { PackageCreateComponent } from './package-create/package-create.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { PackagesUserDisplayComponent } from './packages-user-display/packages-user-display.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsofservicesComponent } from './termsofservices/termsofservices.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
import { TravelinsuranceComponent } from './travelinsurance/travelinsurance.component';
import { KeralaComponent } from './kerala/kerala.component';
import { DelhiComponent } from './delhi/delhi.component';
import { GoaComponent } from './goa/goa.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PackageDisplayComponent,
    PackageCreateComponent,
    FooterComponent,
    AboutUsComponent,
    AdminLoginComponent,
    FeedbackFormComponent,
    FeedbackListComponent,
    BookingFormComponent,
    BookingListComponent,
    PackagesUserDisplayComponent,
    PrivacypolicyComponent,
    TermsofservicesComponent,
    FaqsComponent,
    BlogComponent,
    TravelinsuranceComponent,
    KeralaComponent,
    DelhiComponent,
    GoaComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
