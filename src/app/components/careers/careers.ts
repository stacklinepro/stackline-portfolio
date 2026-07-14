import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: true,
  templateUrl: './careers.html'
})
export class CareersComponent {
  // Application modal/success state
  readonly appliedJob = signal<string | null>(null);

  // Available roles at Stackline
  readonly positions = signal([
    {
      title: 'UI/UX Craftsman',
      type: 'Full-time / Remote',
      location: 'SF or Remote',
      desc: 'Create bespoke interface drafts in Figma. Build clean, custom design layouts from scratch without pulling templates.',
      requirements: ['3+ years Figma UI drafting', 'Deep understanding of typography, spacing, and grids', 'Basic knowledge of semantic HTML/CSS structures']
    },
    {
      title: 'Senior Frontend Engineer',
      type: 'Full-time / Hybrid',
      location: 'San Francisco, CA',
      desc: 'Translate Figma designs into clean, handcrafted markup. Write highly structured vanilla CSS properties and Angular components.',
      requirements: ['5+ years frontend engineering', 'Expert level semantic HTML and vanilla CSS grid systems', 'Proficiency in Angular state signals']
    },
    {
      title: 'Performance & SEO Specialist',
      type: 'Contract / Remote',
      location: 'Remote',
      desc: 'Conduct code audits, compress assets, configure DNS/CDN caching, and structure search metadata for sub-second speeds.',
      requirements: ['Expert knowledge of Chrome DevTools audits', 'In-depth SEO structured schema configuration', 'Experience with image compilation pipelines']
    }
  ]);

  applyForJob(title: string): void {
    this.appliedJob.set(title);
    setTimeout(() => {
      this.appliedJob.set(null);
    }, 4000);
  }
}
