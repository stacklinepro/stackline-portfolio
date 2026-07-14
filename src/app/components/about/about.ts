import { Component, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html'
})
export class AboutComponent {
  readonly companyName = signal(environment.companyName);

  // Milestones timeline data
  readonly milestones = signal([
    { year: '2023', title: 'Studio Founded', text: 'Stackline was founded in response to the growing bloat of drag-and-drop template frameworks.' },
    { year: '2024', title: '100% Score Milestone', text: 'Achieved consecutive 100/100 Lighthouse scores on all deployment models.' },
    { year: '2025', title: 'Studio Expansion', text: 'Recruited top interface artisans to specialize in handcrafted digital assets.' },
    { year: '2026', title: 'Going Carbon Negative', text: 'Optimized server runtimes and markup pathways to make our assets eco-friendly.' }
  ]);

  // Team
  readonly team = signal([
    {
      name: 'Elena Rostova',
      role: 'Founder & Principal Craftsman',
      bio: 'Began writing custom HTML in the notepad era. Believer in code as a craft.'
    },
    {
      name: 'Marcus Vance',
      role: 'Core Frontend Artisan',
      bio: 'Specialist in semantic stylesheets and responsive rendering pathways.'
    },
    {
      name: 'Tariq Al-Fayed',
      role: 'Interaction Designer',
      bio: 'Combines micro-animations with minimal UX styles to keep users engaged.'
    }
  ]);
}
