import { trigger, transition, keyframes, style, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
type ClassProps = {
  base?: string
}


@Component({
  selector: 'app-free-shipping',
  templateUrl: './free-shipping.component.html',
  styleUrl: './free-shipping.component.scss',

})


export class FreeShippingComponent {
  @Input() classes?: ClassProps;
   // Property to hold the URL
   mobileAppIosUrl = environment.mobileAppIosUrl;
}
