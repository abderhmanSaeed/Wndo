import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  links: any[] = [
    {
      href: '/terms-conditions',
      title: 'Terms & Conditions',
    },
    {
      href: '/privacy-policy',
      title: 'Privacy Policy',
    },
    {
      href: '/cookie-policy',
      title: 'Cookie Policy',
    },
    {
      href: '/offer-terms',
      title: 'Offer Terms',
    },
    {
      href: '/sell',
      title: 'Sell with us',
    },
    {
      href: '/infringement',
      title: 'Infringement',
    },
    {
      href: '/security',
      title: 'Security',
    },
  ];

  socialMedia: any[] = [
    {
      href: '/terms-conditions',
      title: 'Terms & Conditions',
      icon: "fa-youtube"
    },
    {
      href: '/privacy-policy',
      title: 'Privacy Policy',
      icon: "fa-square-facebook"
    },
    {
      href: '/cookie-policy',
      title: 'Cookie Policy',
      icon: "fa-square-x-twitter"
    },
    {
      href: '/offer-terms',
      title: 'Offer Terms',
      icon: "fa-square-instagram"
    },
  ];
}
