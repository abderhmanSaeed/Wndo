import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../../data/service/auth/auth.service';
import { ModalService } from '../modal/modal.service';
import { LoginModalComponent } from '../modals/login-modal/login-modal.component';
import { LoginPhonePasswordComponent } from '../modals/login-phone-password/login-phone-password.component';
import { SignUpComponent } from '../modals/sign-up/sign-up.component';
import { Location } from '@angular/common'; // Import Location
import { SellerProductsOffersService } from './../../../data/service/seller-products-offers/seller-products-offers.service';

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

  @Input() sellerProfile!: any;
  @Input() seller!: any;
  @Input() isShowDetails: boolean = false;

  isProductOffersRoute: boolean = false;
  authUserDropdown: any[] = [];
  guestUserDropdown: any[] = [];

  isAuthenticated$ = this.authService.isAuthenticated$;
  userName$ = this.authService.userName$;

  isAuthenticated: boolean = false;
  userName: string | null = null;
  products: any[] = [];

  sellerId: string | null = '';

  showLoginMessage: boolean = false;
  successfullyMessage: string = 'Successfully logged in. Welcome';
  ShowSeler: boolean = false;
  sellerCover: any;

  isActivePath = true

  constructor(private modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    private location: Location,
    private SellerProductsOffersService: SellerProductsOffersService) { }

  ngAfterViewInit(): void {
    this.authUserDropdown = [
      {
        label: 'My Orders',
        value: 'myOrders',
        startContentMenu: this.myOrdersIconTemplate,
      },
      // {
      //   label: 'Tracking Orders',
      //   value: 'trackingOrders',
      //   startContentMenu: this.trackingOrdersIconTemplate,
      // },
    ];
    const currentLang = this.authService.getCurrentLanguage();

    this.guestUserDropdown = [
      {
        label: currentLang === 'en' ? 'LogIn' : 'تسجيل دخول',
        value: 'LogIn',
        startContentMenu: this.loginIconTemplate,
      },
      {
        label: currentLang === 'en' ? 'SignUp' : 'اشتراك',
        value: 'SignUp',
        startContentMenu: this.logoutIconTemplate,
      },
    ];
    throw new Error('Method not implemented.');
  }

  selectedValue: string = '';

  handleLogin() {
    console.log("login")
    this.modalService.open(LoginPhonePasswordComponent, {
      animations: {
        modal: {
          enter: 'enter-slide-down 0.8s',
        },
        overlay: {
          enter: 'fade-in 0.8s',
          leave: 'fade-out 0.3s forwards',
        },
      },
      size: {
        width: '36rem',
      },
    });
  }

  handleSignUp() {
    console.log("SignUp")
    this.modalService.open(SignUpComponent, {
      animations: {
        modal: {
          enter: 'enter-slide-down 0.8s',
        },
        overlay: {
          enter: 'fade-in 0.8s',
          leave: 'fade-out 0.3s forwards',
        },
      },
      size: {
        width: '36rem',
      },
    });
  }

  onValueChanged(value: string) {
    console.log('Value changed:', value);
    if (value === "LogIn") {
      this.handleLogin()
    }
    else if (value === "SignUp") {
      this.handleSignUp()
    }
    else if (value === "myOrders") {
      this.router.navigate(['/product/myOrders']);

    }
  }


  socialMedia: any = [
    {
      href: 'tiktok.com',
      icon: 'ticktok',
    },
    {
      href: 'instagram.com',
      icon: 'instagram',
    },
    {
      href: 'twitter.com',
      icon: 'twitter',
    },
    {
      href: 'facebook.com',
      icon: 'facebook',
    },
  ];

  ngOnInit(): void {
    // Retrieve the current seller data from local storage and parse it
    const sellerDataString = localStorage.getItem('seller');
    const sellerData = sellerDataString ? JSON.parse(sellerDataString) : {};

    const auth = this.authService.isAuth();
    // Check if the sellerId is not null before calling the service
    if (sellerData.sellerId && auth && !this.seller?.cover) {
      this.fetchSellerProfile(sellerData.sellerId);
    }
    if (!auth && (this.location.path().includes('/product/productOrders') || this.location.path().includes('/product/productOffers'))) {
      this.sellerCover = sellerData.sellerCover;
    }
    // const productsLocalStorage = localStorage.getItem('products');
    // if (productsLocalStorage) {
    //   this.products = JSON.parse(productsLocalStorage);
    // }

    // Explicitly load products from localStorage
    this.sharedService.loadProductsFromLocalStorage();

    this.sharedService.products$.subscribe(products => {
      this.products = products;
    });



    this.route.queryParams.subscribe((queryParams) => {
      this.isProductOffersRoute = 'sellerId' in queryParams;
    });


    // Subscribe to the authentication status and user name
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    this.authService.setShowLoginMessage$.subscribe((setShowLoginMessage) => {
      if (this.isAuthenticated || setShowLoginMessage) {
        if (this.location.path().includes('/product/productDetails')) {

          this.showLoginMessage = true;
          setTimeout(() => {
            this.showLoginMessage = false;
          }, 3000);
        }
        // this.authService.setShowLoginMessage(false);


        // Hide the message after a delay (e.g., 3 seconds)

      }
    });


    this.authService.userName$.subscribe((userName) => {
      this.userName = userName;
      this.changeDetectorRef.detectChanges(); // Manually trigger change detection
      // Show the copied message

    });

    // Check if the user is authenticated when the component is initialized
    this.checkAuthenticationStatus();
    if (this.location.path().includes('/product/productDetails') || this.location.path().includes('/product/myOrders') ||
    this.location.path().includes('/product/productOffers')) {
      this.ShowSeler = true
    }

  }
  fetchSellerProfile(sellerId: string): void {
    this.SellerProductsOffersService.getSellerProfile(sellerId).subscribe({
      next: (data) => {
        this.sellerProfile = data?.responseData;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
  private checkAuthenticationStatus(): void {
    const isAuthenticated = this.authService.isAuth();

    if (isAuthenticated) {
      const userInfoString = localStorage.getItem('user_info');

      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        this.authService.setAuthenticated(true);
        this.authService.setUserName(userInfo.userName);
      }
    }
  }
  logout() {
    // Call the logout method from AuthService
    this.authService.logout();

    // Reset component variables
    this.isAuthenticated = false;
    this.userName = null;
    window.location.reload();

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
