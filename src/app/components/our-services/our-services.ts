import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './our-services.html'
})
export class OurServicesComponent {
  // Currently highlighted service index
  readonly selectedService = signal<number>(0);

  // List of services
  readonly services = signal([
    {
      id: 'webdev',
      icon: 'bi-code-slash',
      title: 'Bespoke Frontend Engineering',
      desc: '100% hand-coded layout construction utilizing clean HTML5, modern vanilla CSS, and vanilla JS/TS architectures. Zero templates, zero builders.',
      details: 'We write clean, semantic code that web browsers love. By omitting bulky platforms, we ensure that every byte sent to your user is necessary. This maximizes loading speed, minimizes connection latency, and builds a solid foundation for your application.'
    },
    {
      id: 'seo',
      icon: 'bi-search',
      title: 'SEO & Speed Architecture',
      desc: 'SEO metadata, crawlability optimization, and Core Web Vitals optimizations built into the codebase from the initial tag.',
      details: 'Modern search engines penalize bloated, slow websites. Because our sites are lightweight, we consistently rank at the top of Google Core Web Vitals. We optimize title structures, image rendering pipelines, and code paths on every build.'
    },
    {
      id: 'design',
      icon: 'bi-palette-fill',
      title: 'Custom Brand & UI Design',
      desc: 'Visual mockups tailored to your goals and users. No recycled themes, no generic elements. Built to impress.',
      details: 'Your company is unique, so your digital presence should be too. We design our layouts from scratch in Figma before writing a single line of code, ensuring that your corporate identity is represented beautifully and professionally.'
    },
    {
      id: 'support',
      icon: 'bi-shield-check',
      title: 'Long-term Support & Security',
      desc: 'Server configuration, hosting support, performance audits, and rapid edits to keep your application fresh.',
      details: 'Hand-coded websites are inherently more secure than template libraries because there are no open-source plugins to exploit. We monitor your site continuously and apply quick manual patches and updates whenever your copy or strategy changes.'
    }
  ]);

  selectService(index: number): void {
    this.selectedService.set(index);
  }
}
