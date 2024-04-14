import { Component } from '@angular/core';
import { HeaderOfPageComponent } from '../../../shared/components/header-of-page/header-of-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [SharedModule, SvgIconComponent],
})
export class DashboardComponent {
  title = 'Wndo';

  socialMedia: any = [
    {
      href: 'tiktok.com',
      icon: 'fa-tiktok',
    },
    {
      href: 'instagram.com',
      icon: 'fa-square-instagram',
    },
    {
      href: 'twitter.com',
      icon: 'fa-x-twitter',
    },
    {
      href: 'facebook.com',
      icon: 'fa-facebook-f',
    },
  ];

  categories = [
    {
      name: 'Hair Care',
      icon: 'devices-coloring',
      isOpen: false,
      subMenus: [],
    }, // Use appropriate icons
    { name: 'Skin Care', icon: 'skincare', isOpen: false, subMenus: [] },
    {
      name: 'Personal Care',
      icon: 'gifts',
      isOpen: false,
      subMenus: [
        {
          name: 'Section1',
          icon: '',
        },
        {
          name: 'Section2',
          icon: '',
        },
        {
          name: 'Section1',
          icon: '',
        },
        {
          name: 'Section2',
          icon: '',
        },
        {
          name: 'Section1',
          icon: '',
        },
        {
          name: 'Section2',
          icon: '',
        },
      ],
    },
  ];

  toggleSubmenu(index: number): void {
    this.categories[index].isOpen = !this.categories[index].isOpen;
  }
}
