import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html'
})
export class PortfolioComponent {
  // Active category filter signal
  readonly activeFilter = signal<string>('All');

  // Categories list
  readonly categories = signal(['All', 'E-Commerce', 'Web App', 'Corporate']);

  // Dynamic projects list
  readonly projects = signal([
    {
      title: 'Helix Logistics Gateway',
      category: 'Web App',
      desc: 'Bespoke cargo router interface built for sub-second cellular rendering.',
      speed: '0.3s',
      size: '14 KB',
      icon: 'bi-truck'
    },
    {
      title: 'Aura Skincare Shop',
      category: 'E-Commerce',
      desc: 'Lightweight digital shopfront with secure payment API and custom animations.',
      speed: '0.4s',
      size: '22 KB',
      icon: 'bi-bag-heart'
    },
    {
      title: 'Vanguard Capital Partners',
      category: 'Corporate',
      desc: 'Corporate interface utilizing dynamic graphs and premium layouts.',
      speed: '0.2s',
      size: '9 KB',
      icon: 'bi-bank'
    },
    {
      title: 'Nova SaaS Control Deck',
      category: 'Web App',
      desc: 'Translucent dashboard built for real-time telemetry rendering.',
      speed: '0.5s',
      size: '19 KB',
      icon: 'bi-grid-3x3-gap-fill'
    },
    {
      title: 'Brio Artisan Roasters',
      category: 'E-Commerce',
      desc: 'Coffee bean subscriptions utilizing static generation and custom carts.',
      speed: '0.3s',
      size: '11 KB',
      icon: 'bi-cup-hot'
    },
    {
      title: 'Summit Architecture Firm',
      category: 'Corporate',
      desc: 'Visual portfolio showing large resolution images with lazy-loading pathways.',
      speed: '0.4s',
      size: '15 KB',
      icon: 'bi-building-fill'
    }
  ]);

  // Filter projects dynamically
  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const list = this.projects();
    if (filter === 'All') {
      return list;
    }
    return list.filter(p => p.category === filter);
  });

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }
}
