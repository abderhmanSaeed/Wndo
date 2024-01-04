import { Component } from '@angular/core';

type links = {
  href?: string,
  title: string,
  icon?: string
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  links: links[] = [
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

  socialMedia: links[] = [
    {
      href: '#',
      title: 'youtube',
      icon: "fa-youtube"
    },
    {
      href: '#',
      title: 'facebook',
      icon: "fa-square-facebook"
    },
    {
      href: '#',
      title: 'twitter',
      icon: "fa-square-x-twitter"
    },
    {
      href: '#',
      title: 'instagram',
      icon: "fa-square-instagram"
    },
  ];

  payments: links[] = [
    {
      title: 'visa',
      icon: "visa-coloring"
    },
    {
      title: 'master card',
      icon: "master-card-coloring"
    },
    {
      title: 'master card',
      icon: "american-express-coloring"
    },
  ];
}
