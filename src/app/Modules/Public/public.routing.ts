import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicComponent } from './public.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'about-us', component: AboutUsComponent },
      // { path: 'venues/:venue', component: VenueDetailsComponent },
      // { path: 'ancillary-services', component: AncillaryServicesComponent },
      // { path: 'ancillary-services/:id', component: AncillaryServiceDetailsComponent },
      // { path: 'login', component: LoginComponent },
      // { path: 'signup', component: SignupComponent },
      // { path: 'faqs', component: FaqsComponent },
      // { path: 'terms', component: TermsComponent },
      // { path: 'privacy-policy', component: PrivacyComponent },
      // { path: 'about', component: AboutComponent },
      // { path: 'contact', component: ContactComponent },
      // { path: 'password-reset', component: PasswordComponent }
    ]
  }
];
