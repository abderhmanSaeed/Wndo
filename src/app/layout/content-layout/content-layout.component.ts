import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.scss',
  animations: [
    trigger('toggleMenu', [
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('closed', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition('open <=> closed', animate('500ms ease-in-out'))
    ]),
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('out => in', animate('500ms ease-in')),
      transition('in => out', animate('500ms ease-out'))
    ]),
    trigger('expandContract', [
      state('expanded', style({ width: '*' })),
      state('contracted', style({ width: '50px' })), // Adjust the width as needed
      transition('expanded <=> contracted', animate('300ms ease-in-out'))
    ])
  ],

})
export class ContentLayoutComponent {
  menuState: string = 'closed';
  showText: boolean = false;

  openHelpMenu() {
    this.menuState = this.menuState === 'open' ? 'closed' : 'open';
    this.showText = !this.showText;
  }
}
