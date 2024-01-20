import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../../data/service/auth/auth.service';

@Component({
  selector: 'app-header-of-page',
  templateUrl: './header-of-page.component.html',
  styleUrls: ['./header-of-page.component.scss'],
})
export class HeaderOfPageComponent implements OnInit, AfterViewInit {
  @ViewChild('myOrdersIcon', { read: TemplateRef })
  myOrdersIconTemplate!: TemplateRef<any>;
  @ViewChild('trackingOrdersIcon', { read: TemplateRef })
  trackingOrdersIconTemplate!: TemplateRef<any>;
  @ViewChild('loginIcon', { read: TemplateRef })
  loginIconTemplate!: TemplateRef<any>;
  @ViewChild('logoutIcon', { read: TemplateRef })
  logoutIconTemplate!: TemplateRef<any>;

  @Input() seller!: any;
  @Input() isShowDetails: boolean = false;

  isProductOffersRoute: boolean = false;
  authUserDropdown: any[] = [];
  guestUserDropdown: any[] = [];

  isAuthenticated: boolean = false;
  userName: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private sharedService: SharedService ,
    private authService: AuthService) { }
  ngAfterViewInit(): void {
    this.authUserDropdown = [
      {
        label: 'My Orders',
        value: 'myOrders',
        startContentMenu: this.myOrdersIconTemplate,
      },
      {
        label: 'Tracking Orders',
        value: 'trackingOrders',
        startContentMenu: this.trackingOrdersIconTemplate,
      },
    ];

    this.guestUserDropdown = [
      {
        label: 'LogIn',
        value: 'LogIn',
        startContentMenu: this.loginIconTemplate,
      },
      {
        label: 'SignUp',
        value: 'SignUp',
        startContentMenu: this.logoutIconTemplate,
      },
    ];
    throw new Error('Method not implemented.');
  }

  socialMedia: any = [
    {
      href: 'tiktok.com',
      icon: 'tiktok-coloring',
    },
    {
      href: 'facebook.com',
      icon: 'facebook-coloring',
    },
    {
      href: 'twitter.com',
      icon: 'twitter-coloring',
    },
    {
      href: 'instagram.com',
      icon: 'instagram-coloring',
    },
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.isProductOffersRoute = 'sellerId' in queryParams;
    });

    // Check if the user is authenticated when the component is initialized
    this.isAuthenticated = this.authService.isAuth();

    // If authenticated, get the user's name from local storage
    if (this.isAuthenticated) {
      const userInfoString = localStorage.getItem('user_info');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        this.userName = userInfo.userName;
      }
    }
  }
  logout() {
    // Call the logout method from AuthService
    this.authService.logout();

    // Reset component variables
    this.isAuthenticated = false;
    this.userName = null;
  }
  logSellerId() {
    let sellerId = this.seller?.id;
    // Only navigate if not on the productOffers route
    if (!this.isProductOffersRoute) {
      // Navigate to the product/productOffers route with seller ID
      this.router.navigate(['/product/productOffers', { sellerId: sellerId }]);
    }
  }
}
