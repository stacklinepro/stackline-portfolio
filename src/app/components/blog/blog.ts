import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.html'
})
export class BlogComponent {
  // Selected article overlay state
  readonly selectedArticleIndex = signal<number | null>(null);

  // Articles list
  readonly articles = signal([
    {
      title: 'Why We Hand-Code Websites in 2026',
      date: 'May 12, 2026',
      author: 'Elena Rostova',
      readTime: '5 min read',
      excerpt: 'Discover why templates and automated site builders are dragging down your mobile conversions and search rankings.',
      content: 'In 2026, the internet is flooded with unoptimized database queries, unused CSS classes, and bulky JavaScript libraries that exist solely to support visual editors. The average mobile webpage weight has ballooned to over 3MB. By hand-coding, we build pages under 20KB, resulting in loading times below 0.3s. This improves conversion metrics, cuts hosting expenses, and delivers an outstanding user experience.'
    },
    {
      title: 'The Hidden Cost of Visual Page Builders',
      date: 'April 28, 2026',
      author: 'Marcus Vance',
      readTime: '8 min read',
      excerpt: 'Visual tools promise speed during design but cost you rankings in search visibility and client trust later.',
      content: 'Every visual drag-and-drop builder wraps simple text blocks in layers of generic container divs. Search engines struggle to scan through this unsemantic layout. Furthermore, builders make you dependent on theme updates, security patches for random plugins, and high subscription renewals. Hand-coding gives you absolute control, security, and pure speed right from compile time.'
    },
    {
      title: 'Mastering Lighthouse Core Web Vitals',
      date: 'March 15, 2026',
      author: 'Tariq Al-Fayed',
      readTime: '6 min read',
      excerpt: 'How we achieve consistent 100/100 performance marks on every deployment using semantic variables and CDNs.',
      content: 'Lighthouse audits analyze Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP). To achieve a perfect score, you must minimize main-thread work, optimize layout shifting, compress assets, and write clean stylesheets. We explain how our global variables layout and server configurations keep our scores in the green.'
    }
  ]);

  openArticle(index: number): void {
    this.selectedArticleIndex.set(index);
  }

  closeArticle(): void {
    this.selectedArticleIndex.set(null);
  }
}
