import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.html'
})
export class ProcessComponent {
  // Steps in our bespoke workflow
  readonly steps = signal([
    {
      step: '01',
      title: 'Discovery & Blueprints',
      desc: 'We map out your business objectives, content architecture, and customer conversion pathways. No generic templates allowed.',
      icon: 'bi-search'
    },
    {
      step: '02',
      title: 'Bespoke UI Design',
      desc: 'We draft your custom interface layouts in Figma, designing specifically for your corporate branding and customer personas.',
      icon: 'bi-palette'
    },
    {
      step: '03',
      title: 'Semantic Markup',
      desc: 'We translate designs into clean HTML5. We establish strict semantic guidelines for text layout, layout structuring, and keyboard accessibility.',
      icon: 'bi-filetype-html'
    },
    {
      step: '04',
      title: 'Performance & Styles',
      desc: 'We apply our customized global stylesheet variables. We code animations, micro-transitions, and responsive grids with zero bloat.',
      icon: 'bi-lightning-charge'
    },
    {
      step: '05',
      title: 'Lighthouse Tune-Up',
      desc: 'We run multiple speed audits, compress assets, structure caching parameters, and configure schema layouts to ensure perfect Core Web Vitals.',
      icon: 'bi-speedometer'
    },
    {
      step: '06',
      title: 'Deploy & Support',
      desc: 'We deploy to global CDNs for rapid caching. We configure DNS, SSL certificates, and set up long-term performance support.',
      icon: 'bi-cloud-upload'
    }
  ]);
}
