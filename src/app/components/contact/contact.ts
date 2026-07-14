import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html'
})
export class ContactComponent {
  // Contact details via environment
  readonly companyName = signal(environment.companyName);
  readonly contactEmail = signal(environment.contactEmail);
  readonly phone = signal(environment.phone);
  readonly address = signal(environment.address);

  // Form Fields using signals
  readonly name = signal('');
  readonly email = signal('');
  readonly message = signal('');
  readonly submitted = signal(false);

  // Transparency Estimator inputs
  readonly pageCount = signal<number>(5);
  readonly includeEcom = signal<boolean>(false);
  readonly includeSEO = signal<boolean>(true);
  readonly includeBlog = signal<boolean>(false);

  // Computed Outputs
  readonly estimatedPrice = computed(() => {
    let base = 800; // Base rate for setup & hosting setup
    base += this.pageCount() * 150; // $150 per custom hand-coded page
    
    if (this.includeEcom()) base += 800; // E-Commerce setup
    if (this.includeSEO()) base += 250;  // Premium SEO audit config
    if (this.includeBlog()) base += 400; // Blog/Insights setup

    return base;
  });

  readonly estimatedDuration = computed(() => {
    let days = 5; // Base setup
    days += this.pageCount() * 1.5; // Days per page
    
    if (this.includeEcom()) days += 5;
    if (this.includeSEO()) days += 2;
    if (this.includeBlog()) days += 3;

    return Math.ceil(days);
  });

  // Event handlers
  onPageCountChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.pageCount.set(parseInt(target.value, 10));
  }

  toggleEcom(): void {
    this.includeEcom.update(val => !val);
  }

  toggleSEO(): void {
    this.includeSEO.update(val => !val);
  }

  toggleBlog(): void {
    this.includeBlog.update(val => !val);
  }

  onSubmitForm(event: Event): void {
    event.preventDefault();
    if (this.name() && this.email() && this.message()) {
      // Simulate form submission
      this.submitted.set(true);
    }
  }

  resetForm(): void {
    this.name.set('');
    this.email.set('');
    this.message.set('');
    this.submitted.set(false);
  }
}
