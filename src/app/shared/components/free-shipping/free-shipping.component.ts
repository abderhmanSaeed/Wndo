import { trigger, transition, keyframes, style, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
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
}
