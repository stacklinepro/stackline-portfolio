import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html'
})
export class FooterComponent {
  // Use signals for environments config
  readonly companyName = signal(environment.companyName);
  readonly tagline = signal(environment.tagline);
  readonly contactEmail = signal(environment.contactEmail);
  readonly supportEmail = signal(environment.supportEmail);
  readonly phone = signal(environment.phone);
  readonly address = signal(environment.address);
  readonly currentYear = signal(new Date().getFullYear());
  
  readonly githubUrl = signal(environment.social.github);
  readonly twitterUrl = signal(environment.social.twitter);
  readonly linkedinUrl = signal(environment.social.linkedin);

  // Dynamic quick links arrays
  readonly companyLinks = signal([
    { path: '/about', label: 'About Us' },
    { path: '/careers', label: 'Careers' },
    { path: '/blog', label: 'Insights & Blog' },
    { path: '/contact', label: 'Contact Us' }
  ]);

  readonly serviceLinks = signal([
    { path: '/services', label: 'Our Services' },
    { path: '/values', label: 'Our Values' },
    { path: '/process', label: 'Our Process' },
    { path: '/portfolio', label: 'Our Work' }
  ]);

  readonly legalLinks = signal([
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms & Conditions' }
  ]);
}
