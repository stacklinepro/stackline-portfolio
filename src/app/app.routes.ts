import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page';
import { AboutComponent } from './components/about/about';
import { OurServicesComponent } from './components/our-services/our-services';
import { OurValuesComponent } from './components/our-values/our-values';
import { ContactComponent } from './components/contact/contact';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { ProcessComponent } from './components/process/process';
import { CareersComponent } from './components/careers/careers';
import { BlogComponent } from './components/blog/blog';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'values', component: OurValuesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsConditionsComponent },
  { path: '**', redirectTo: '' }
];
