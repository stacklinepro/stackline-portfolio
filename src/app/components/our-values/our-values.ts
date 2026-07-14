import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-our-values',
  standalone: true,
  imports: [],
  templateUrl: './our-values.html'
})
export class OurValuesComponent {
  // Signal list of values with details
  readonly values = signal([
    {
      icon: 'bi-hammer',
      title: 'Craftsmanship over shortcuts',
      sub: 'Intentional Coding',
      text: 'Every line of code is written with intention. No bloated templates, no AI-generated guesswork. We design from scratch and hand-code, giving us absolute control over the codebase.'
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Performance first',
      sub: '0.4s Speeds',
      text: 'A website should load fast and work flawlessly, on every device, every time. Speed affects bounce rates, conversion, and user satisfaction, which is why we optimize down to the millisecond.'
    },
    {
      icon: 'bi-person-bounding-box',
      title: 'Built for you, not for everyone',
      sub: 'Bespoke Blueprinting',
      text: 'No cookie-cutter designs. Every project starts from your brand, your goals, your users. We sit down, map your needs, and design a custom frontend that belongs to your identity.'
    },
    {
      icon: 'bi-eye-fill',
      title: 'Transparency',
      sub: 'Clear Pricing & Lines',
      text: 'Clear communication, clear timelines, clear pricing. No hidden surprises. We quote upfront, establish clear objectives, and send weekly updates during the hand-coding phases.'
    },
    {
      icon: 'bi-heart-fill',
      title: 'Long-term partnership',
      sub: 'Ongoing Care',
      text: 'We don\'t disappear after launch. We\'re here for updates, support, and growth. Your site stays fast, updated, and secure as your company evolves.'
    }
  ]);
}
