import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html'
})
export class HeaderComponent {
  // Use signals for configurations
  readonly companyName = signal(environment.companyName);
  readonly supportEmail = signal(environment.supportEmail);
  
  // Mobile navbar collapse state
  readonly isMenuOpen = signal(false);

  // Dynamic Navigation menu
  readonly navItems = signal([
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/values', label: 'Values' },
    { path: '/portfolio', label: 'Work' },
    { path: '/process', label: 'Process' },
    { path: '/careers', label: 'Careers' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ]);

  toggleMenu(): void {
    this.isMenuOpen.update(val => !val);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
