import { OrderService } from './../../../data/service/order/order.service';
import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
  Renderer2,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { StepComponent } from './step/step.component';
import { LoginPhonePasswordComponent } from '../modals/login-phone-password/login-phone-password.component';
import { ModalService } from '../modal/modal.service';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../../data/service/auth/auth.service';
import { OrderTrackState, ShippingFeeRequest } from '../../models';
import { Location } from '@angular/common'; // Import Location
import { ShippingFessService } from '../../../data/service/shippeng-fees/shipping-fess.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderConfirmedModal } from '../modals/order-confirmed-modal/order-confirmed-modall.component';
import { DomSanitizer } from '@angular/platform-browser';
import { AddAddressService } from '../../../data/service/add-address/add-address.service';
import { ShippingAddressService } from '../../../data/service/shipping-address/shipping-address.service';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements AfterContentInit, OnDestroy {
  showPaymentIframe = false;
  paymentUrl: string = '';
  @Input() btnLabel: string = 'Next';
  @Input() disabledNextButton: boolean = false;
  @Input() addMoreProduct: boolean = false;
  @Input() hasActionFooter: boolean = true;
  @Input() stateOfSellerOrder: any;
  shippingFee: any;
  addressData!: {
    name: string;
    street: string;
    buildingNo: number;
    cityId: number;
    icon: number;
    districtId: number;
    zoneId: number;
  }
  private subscription: Subscription = new Subscription();

  constructor(private renderer: Renderer2, private modalService: ModalService,
    private sharedService: SharedService, private authService: AuthService,
    private location: Location, private shippingFessService: ShippingFessService,
    private orderService: OrderService, private router: Router, private sanitizer: DomSanitizer,
    private route: ActivatedRoute, private addAddressService: AddAddressService, private shippingAddressService: ShippingAddressService) {
    this.route.queryParams.subscribe(params => {
      const orderNumber = params['orderNumber'];
      if (orderNumber) {
        // Navigate to the order process page
        this.router.navigate(['/product/orderProcess', { orderNumber: orderNumber }]);
      }
    });
  }

  @ContentChildren(StepComponent) steps: QueryList<StepComponent> | undefined;
  currentStep: number = 0;
  currentStepTemplate: any = null;

  @ViewChild('stepContainer') stepsElement: ElementRef | undefined;
  // Declare a ViewChild for the LoginPhonePasswordComponent
  @ViewChild(LoginPhonePasswordComponent) loginComponent: LoginPhonePasswordComponent | undefined;

  ngAfterViewInit() {
    this.calculateLineWidths();
  }

  ngAfterContentInit() {
    this.steps?.changes.subscribe(() => {
      this.updateCurrentStepTemplate();
    });

    // Subscribe to the login button clicks
    this.sharedService.loginButtonClicked$.subscribe(() => {
      // Advance to the next step when the LOGIN button is clicked
      this.currentStep++;
      this.updateCurrentStepTemplate();
    });

    if (this.stateOfSellerOrder) {
      switch (this.stateOfSellerOrder) {
        case OrderTrackState.pickup:
          this.currentStep++;
          this.updateCurrentStepTemplate();
          break;
        case OrderTrackState.outdelivery:
          this.currentStep += 2;
          this.updateCurrentStepTemplate();
          break;
        case OrderTrackState.delivered:
          this.currentStep += 3;
          this.updateCurrentStepTemplate();
          break;
        default:
          this.currentStep = 0; // Default or initial step
      }
    }
  }

  nextStep() {
    if (this.steps && this.currentStep < this.steps.length - 1) {
      // this.currentStep++;
      // this.updateCurrentStepTemplate();
      const auth = this.authService.isAuth();
      if (this.currentStep === 0 && !auth) {
        // If the current step is the "Check Out" step, call the openLoginModal method
        this.openLoginModal();
      }
      else if (this.currentStep === 1 && this.location.path().includes('/product/productOrders')) {
        // If the current step is the "Shipping & Payment" step, call the get Shipping Fees method
        // Assuming orderService has a BehaviorSubject named 'order'
        const currentOrder = this.orderService.order.getValue();

        if (currentOrder && currentOrder.addressId === 0) {
          this.addressData = this.addAddressService.getAddressData();
          this.submitAddress();
        } else {
          this.fetchShippingFees();

        }
        // if(order.addressId)

      }
      // else if (this.currentStep === 2 && this.location.path().includes('/product/productOrders')) {
      //   // If the current step is the "Shipping & Payment" step, call the get Shipping Fees method
      // }
      else {
        // Otherwise, proceed to the next step
        this.currentStep++;
        this.updateCurrentStepTemplate();
      }
    }
    else {
      if (this.currentStep === 2 && this.location.path().includes('/product/productOrders')) {
        this.submitOrder();
      }
    }
  }
  submitAddress() {
    this.shippingAddressService.postAddress(this.addressData).subscribe({
      next: (response: any) => {
        if (response.statusCode === 200 && response.responseData?.id) {
          this.shippingFessService.updateAddressId(response.responseData?.id);
          this.orderService.setAddressId(response.responseData?.id);
          this.fetchShippingFees();

            // Use the matched address object for shippingFessService.setAddress
            this.shippingFessService.setAddress(response.responseData);


        }

      },
      error: (error) => console.error('Error submitting address:', error),
    });
  }
  submitOrder() {
    this.orderService.getOrder().subscribe(order => {
      if (order) { // Check if the order is not null
        // Use the dynamically obtained order data
        const orderData = {
          pickUpTime: order.pickUpTime,
          paymentMethod: order.paymentMethod,
          addressId: order.addressId,
          voucherCode: order.voucherCode,
          totalOrderPrice: order.totalOrderPrice,
          shippingFees: order.shippingFees,
          orderItems: order.orderItems.map(item => ({
            productId: item.productId,
            sellerId: item.sellerId,
            sizeId: item.sizeId,
            colorId: item.colorId,
            quantity: item.quantity,
          })),
        };

        this.orderService.placeOrder(orderData).subscribe({
          next: (response: any) => {
            if (response.statusCode === 200 && response.responseData?.orderNumber) {
              this.orderService.setOrderNumber(response.responseData.orderNumber);
              this.openOrderConfirmedModal();
              // Remove products from localStorage
              localStorage.removeItem('products');
            }
            if (response.statusCode === 200 && response.responseData?.orderNumber === 0 && response.responseData?.redirectUrl) {
              // Redirect to the payment page
              window.location.href = response.responseData.redirectUrl;
            }

            console.log('Order placed successfully', response)
          },
          error: (error) => console.error('Error placing order:', error),
        });
      } else {
        console.error('No order data available');
        // Handle the case where there is no order data (maybe redirect the user or show a message)
      }
    });
  }

  private subscribeToOrder() {

    this.subscription.add(
      this.orderService.getOrder().subscribe(order => {
        // Handle the order update here
        console.log(order);
      })
    );
  }

  fetchShippingFees(): void {
    const request = this.shippingFessService.getShippingFeeRequest();
    this.shippingFessService.getShippingFees(request)
      .subscribe({
        next: (response) => {
          this.shippingFee = response;
          this.shippingFessService.updateShippingFee(response.responseData);
          this.orderService.setShippingFees(response.responseData);
          this.currentStep++;
          this.updateCurrentStepTemplate();
          console.log('Shipping fee fetched successfully:', response);
        },
        error: (error) => {
          console.error('Error fetching shipping fees:', error);
        }
      });
  }
  openOrderConfirmedModal() {
    this.modalService.open(OrderConfirmedModal, {
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
  openLoginModal() {
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
  // Add this method to handle the close event from LoginPhonePasswordComponent
  handleLoginClose() {
    // Advance to the next step when the "LOGIN" button is clicked in LoginPhonePasswordComponent
    this.currentStep++;
    this.updateCurrentStepTemplate();
  }
  backStep() {
    if (this.steps && this.currentStep > 0) {
      this.currentStep--;
      this.updateCurrentStepTemplate();
    }
  }

  private updateCurrentStepTemplate() {
    if (this.steps) {
      this.currentStepTemplate =
        this.steps.toArray()[this.currentStep]?.template || null;
    }
  }


  calculateLineWidths() {
    let stepElementsArray: any[] = [];

    if (this.steps && this.stepsElement) {
      stepElementsArray = this.stepsElement.nativeElement.childNodes;

      stepElementsArray.forEach((step: any, index: number) => {
        if (index < stepElementsArray.length - 1) {
          const nextStep = stepElementsArray[index + 1];
          const line = step.children[0]?.children[0];
          if (line) {
            let lineWidth: number;

            const stepX = step.offsetLeft + step.offsetWidth / 2;
            const stepY = step.offsetTop + step.offsetHeight / 2;

            const nextStepX = nextStep.offsetLeft + nextStep.offsetWidth / 2;
            const nextStepY = nextStep.offsetTop + nextStep.offsetHeight / 2;

            const distance = Math.sqrt(Math.pow(nextStepX - stepX, 2) + Math.pow(nextStepY - stepY, 2));
            const circleWidth = 11;

            lineWidth = distance - circleWidth * 2;

            this.renderer.setStyle(line, 'width', `${lineWidth}px`);
          }
        }
      });
    }
  }

  updateCurrentStep(stateOfSellerOrder: any): void {
    switch (stateOfSellerOrder) {
      case OrderTrackState.placed:
        this.currentStep = OrderTrackState.placed; // Assuming the first step is 0
        break;
      case OrderTrackState.pickup:
        this.currentStep = OrderTrackState.pickup;
        break;
      case OrderTrackState.outdelivery:
        this.currentStep = OrderTrackState.outdelivery;
        break;
      case OrderTrackState.delivered:
        this.currentStep = OrderTrackState.delivered;
        break;
      default:
        this.currentStep = 0; // Default or initial step
    }
  }

  addMore(): void {
    // Retrieve the seller ID from local storage
    const sellerId = localStorage.getItem('sellerId');

    // Check if the sellerId is not null before calling the service
    if (sellerId) {
      this.router.navigate(['/product/productOffers', { sellerId: sellerId }]);

    } else {
      // Handle the case where sellerId is not found in local storage
      console.error('Seller ID not found in local storage');
    }

  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
