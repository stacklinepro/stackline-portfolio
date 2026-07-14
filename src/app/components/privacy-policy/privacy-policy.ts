import { Component, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  templateUrl: './privacy-policy.html'
})
export class PrivacyPolicyComponent {
  readonly companyName = signal(environment.companyName);
  readonly contactEmail = signal(environment.contactEmail);
}
