import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.html'
})
export class LandingPageComponent {
  // Brand configurations via environment
  readonly companyName = signal(environment.companyName);
  readonly tagline = signal(environment.tagline);
  readonly contactEmail = signal(environment.contactEmail);

  // Hero section statistics counters
  readonly stats = signal([
    { count: '100%', label: 'Semantic Hand-Coded' },
    { count: '0.4s', label: 'Average Mobile Load Time' },
    { count: '100/100', label: 'Lighthouse Score' }
  ]);

  // Why Stackline: Visual comparison indicators
  readonly activeComparisonMetric = signal<'speed' | 'size' | 'requests'>('speed');

  readonly performanceMetrics = signal({
    speed: {
      stacklineVal: '0.4s',
      stacklinePct: 10,  // Faster is less bar width, or stackline is 10% of builder's time
      builderVal: '4.8s',
      builderPct: 100
    },
    size: {
      stacklineVal: '18 KB',
      stacklinePct: 2,
      builderVal: '2.4 MB',
      builderPct: 100
    },
    requests: {
      stacklineVal: '6 requests',
      stacklinePct: 7,
      builderVal: '84 requests',
      builderPct: 100
    }
  });

  // Lighthouse panels
  readonly lighthousePanels = signal([
    { title: 'Performance', score: 100 },
    { title: 'Accessibility', score: 100 },
    { title: 'Best Practices', score: 100 },
    { title: 'SEO', score: 100 }
  ]);

  // Our Values list
  readonly values = signal([
    {
      icon: 'bi-hammer',
      title: 'Craftsmanship over shortcuts',
      text: 'Every line of code is written with intention. No bloated templates, no AI-generated guesswork.'
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Performance first',
      text: 'A website should load fast and work flawlessly, on every device, every time.'
    },
    {
      icon: 'bi-person-bounding-box',
      title: 'Built for you, not for everyone',
      text: 'No cookie-cutter designs. Every project starts from your brand, your goals, your users.'
    },
    {
      icon: 'bi-eye-fill',
      title: 'Transparency',
      text: 'Clear communication, clear timelines, clear pricing. No hidden surprises.'
    },
    {
      icon: 'bi-heart-fill',
      title: 'Long-term partnership',
      text: 'We don\'t disappear after launch. We\'re here for updates, support, and growth.'
    }
  ]);

  // Why Stackline details
  readonly differences = signal([
    { icon: 'bi-code-slash', title: '100% Hand-Coded', desc: 'No AI page builders, no site generators, just clean semantic code.' },
    { icon: 'bi-search', title: 'Built for Speed & SEO', desc: 'Optimized from the ground up to rank higher and load instantly.' },
    { icon: 'bi-palette', title: 'Fully Custom Design', desc: 'A bespoke layout created for your brand, not a recycled theme.' },
    { icon: 'bi-graph-up-arrow', title: 'Scalable & Expandable', desc: 'Clean architecture that easily grows with your business requirements.' }
  ]);

  // Team members
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

  // Testimonials
  readonly testimonials = signal([
    {
      quote: 'Stackline replaced our bloated page-builder site with a bespoke hand-coded layout. Our page loading speeds dropped from 5 seconds to 0.3 seconds, and our SEO traffic doubled in 90 days.',
      author: 'Julia Thorne',
      company: 'Foundry Collective'
    },
    {
      quote: 'Working with Elena and Marcus was incredibly refreshing. No confusing pricing, no templates, and a website that is genuinely ours. Highly recommended!',
      author: 'Devon Kellar',
      company: 'Helix Logistics'
    }
  ]);

  // FAQs
  readonly activeFaq = signal<number | null>(null);
  
  readonly faqs = signal([
    {
      q: 'Why hand-coded over site builders like WordPress or Webflow?',
      a: 'Visual builders write massive amounts of machine-generated code to support drag-and-drop features. This adds bloat, slows load times, hurts search rankings, and makes updates complex. Hand-coded sites are clean, ultra-fast, secure, and load only the bytes you actually need.'
    },
    {
      q: 'Does a hand-coded website take longer to build?',
      a: 'Because we start from a clean canvas, design, and code with precision, it can take slightly longer than installing a template. However, our structured process and modular workflow ensure we deliver highly optimized products in competitive timelines.'
    },
    {
      q: 'How do updates work if there is no CMS drag-and-drop builder?',
      a: 'We set up the text content and properties dynamically, and offer long-term support plans. For structural changes, we handle the updates directly, ensuring the code remains clean, fast, and optimized over time.'
    },
    {
      q: 'What is the cost structure for a custom portfolio website?',
      a: 'We offer fixed project pricing based on pages and custom features. Since there are no heavy licensing or theme subscription fees, your long-term hosting and maintenance costs are significantly lower.'
    }
  ]);

  toggleFaq(index: number): void {
    if (this.activeFaq() === index) {
      this.activeFaq.set(null);
    } else {
      this.activeFaq.set(index);
    }
  }

  setMetric(metric: 'speed' | 'size' | 'requests'): void {
    this.activeComparisonMetric.set(metric);
  }
}
