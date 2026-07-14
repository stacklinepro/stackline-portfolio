import { Component, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  templateUrl: './terms-conditions.html'
})
export class TermsConditionsComponent {
  readonly companyName = signal(environment.companyName);
}
