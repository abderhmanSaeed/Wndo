import { ShippingAddressService } from './../../../../data/service/shipping-address/shipping-address.service';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { OptionProps, PaymentType, PickUpTime } from '../../../models';
import { CountryPhoneCodeService } from '../../../../data/service/country-phone/country-phone-code.service';
import { AuthService } from '../../../../data/service/auth/auth.service';
import { Subscription } from 'rxjs';
import { ShippingFessService } from '../../../../data/service/shippeng-fees/shipping-fess.service';
import { OrderService } from '../../../../data/service/order/order.service';

@Component({
  selector: 'app-shipping-payment',
  templateUrl: './shipping-payment.component.html',
  styleUrl: './shipping-payment.component.scss',
})
export class ShippingPaymentComponent implements OnInit, OnDestroy {
  countriesCode: OptionProps[] = [];
  products: any[] = []; // Assuming your products have a certain structure
  cities: any[] = [];
  addresses: any[] = [];
  selectedCity!: string; // Non-null assertion
  selectedAddresses!: string; // Non-null assertion
  selectedDistrict!: string; // Non-null assertion
  currentPaymentMethod: any;
  currentShippingTime: any;
  districtsAndZones: any[] = [];
  private subscriptions = new Subscription();
   currentLang = this.authService.getCurrentLanguage();

  constructor(private shippingAddressService: ShippingAddressService, private countryPhoneCodeService: CountryPhoneCodeService, private authService: AuthService,
    private shippingFessService: ShippingFessService, private orderService: OrderService) { }
  ngOnInit(): void {
    const auth = this.authService.isAuth();
    if (!auth) {
      this.getCountryPhoneCodes();
    }
    // Retrieve products from localStorage
    const storedProductsString = localStorage.getItem('products');

    if (storedProductsString) {
      this.products = JSON.parse(storedProductsString);
    }
    this.getAddresses();
    this.getCities();

    this.subscriptions.add(
      this.shippingFessService.productRecords$.subscribe(products => {
        console.log(products);
        this.updateProductQuantities(products);
      })
    );
    this.subscriptions.add(
      this.orderService.getOrder().subscribe(order => {
        console.log(order);
        if (order) {
          this.currentPaymentMethod = order.paymentMethod;
          this.currentShippingTime = order.pickUpTime;
        }

      })
    );
    // this.subscriptions.add(this.orderService.getOrder().subscribe(
    //   order => console.log(order) // Logs the current order
    //   this.currentPaymentMethod = order.paymentMethod;
    // ));

  }
  getCountryPhoneCodes(): void {
    this.countryPhoneCodeService.getCountryPhoneCodes()
      .subscribe(
        response => {
          if (response.isSuccess) {
            this.countriesCode = response.responseData.map((code: string) => ({ label: code, value: code }));
            // Handle the codes as needed
          } else {
            console.error('Error:', response.errorMessage);
            // Handle error cases
          }
        },
        error => {
          console.error('HTTP Error:', error);
          // Handle HTTP errors
        }
      );
  }
  getAddresses(): void {
    this.shippingAddressService.getAddresses().subscribe(data => {
      this.addresses = data;
    }, error => {
      console.error('There was an error!', error);
    });
  }
  getCities(): void {
    this.shippingAddressService.getCities().subscribe(data => {
      this.cities = data;
    }, error => {
      console.error('There was an error!', error);
    });
  }
  getDistrictsAndZones(cityId: number) {
    this.shippingAddressService.getDistrictsAndZones(cityId).subscribe({
      next: (data) => {
        this.districtsAndZones = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
  onCityChange(newValue: any) {
    this.selectedCity = newValue;
    if (newValue === '0') {
      this.districtsAndZones = [];
    } else {

      this.getDistrictsAndZones(newValue);
    }
    // Additional logic when city changes, if needed
  }

  onAddressesChange(newValue: any) {
    this.selectedAddresses = newValue;
    this.shippingFessService.updateAddressId(newValue);
    this.orderService.setAddressId(newValue);
    // Find the address object with matching ID
    const matchedAddress = this.addresses.find((address) => address.value === newValue);

    if (matchedAddress) {
      // Use the matched address object for shippingFessService.setAddress
      this.shippingFessService.setAddress(matchedAddress);
    }
    // this.shippingFessService.setAddress(newValue);

  }

  onDistrictChange(newValue: any) {
    this.selectedDistrict = newValue;
    console.log(this.selectedDistrict);
  }
  handleSelectedOption(selectedOption: string) {
    console.log('Selected option:', selectedOption);
    // Do whatever you need to do with the selected option in the parent component
  }
  onNameChanged(name: string) {
    console.log('Name changed:', name);
    // You can perform any other actions with the emitted 'name' value here
  }
  // cities = [
  //   { label: 'Cairo', value: 'cairo' },
  //   { label: 'Alex', value: 'alex' },
  // ];

  updateProductQuantities(updates: any[]) {
    // Retrieve the products array from local storage
    let products = JSON.parse(localStorage.getItem('products') || '[]');

    // Update the quantities of the products based on the updates
    updates.forEach(update => {
      const productIndex = products.findIndex((product: any) => product.id === update.productId);
      if (productIndex !== -1) {
        products[productIndex].quantity = update.quantity;
      }
    });

    // Save the updated products array back to local storage
    localStorage.setItem('products', JSON.stringify(products));
  }

  // paymentMethods = [
  //   {
  //     label: 'Cash on Delievery',
  //     name: 'cash',
  //     value: 'cash',
  //     desc: 'Extra fee will be applied',
  //     children: '<i class="fa-solid fa-wallet"></i>',
  //   },
  //   {
  //     label: 'Credit Card',
  //     name: 'creditCard',
  //     value: 'creditCard',
  //     desc: '',
  //     children: '<i class="fa-regular fa-credit-card"></i>',
  //   },
  // ];

  paymentMethods = [
    {
      label: this.currentLang === 'en' ? 'Cash on Delivery' : 'الدفع عند الإستلام',
      name: 'cash',
      value: PaymentType.Cash,
      desc: this.currentLang === 'en' ?  'Extra fee will be applied' : 'سيتم تطبيق مصاريف إضافية',
      children: '<i class="fa-solid fa-wallet"></i>',
    },
    {
      label: this.currentLang === 'en' ? 'Credit Card' : 'بطاقة الإئتمان',
      name: 'creditCard',
      value: PaymentType.CreditCard,
      desc: '',
      children: '<i class="fa-regular fa-credit-card"></i>',
    },
  ];



  shippingTimes = [
    {
      label: this.currentLang === 'en' ? 'Any time' : 'أي وقت',
      name: 'anyTime',
      value: PickUpTime.Any,
      desc: '',
      children: '',
    },
    {
      label:  this.currentLang === 'en' ?'Morning 9 am - 2 pm' : 'صباحًا من 9ص-2م',
      name: 'morning',
      value: PickUpTime.Morning9am2pm,
      desc: '',
      children: '',
    },
    {
      label:  this.currentLang === 'en' ? 'Evening 2 pm - 8 pm' : 'مساءً من 2م-8م',
      name: 'evening',
      value: PickUpTime.Evening2pm8pm,
      desc: '',
      children: '',
    },
  ];

  onShippingTimeChange(selectedValue: any): void {
    if (typeof selectedValue === 'number') {
      console.log('Selected shipping time:', selectedValue);
      this.orderService.setPickUpTime(selectedValue);
      // Convert selectedValue to the enum value if needed
      // And handle the shipping time change as needed
    }
  }

  onPaymentMethodChange(selectedValue: any): void {
    if (typeof selectedValue === 'number') {
      console.log('Selected payment method:', selectedValue);
      this.orderService.setPaymentMethod(selectedValue);
      this.currentPaymentMethod = selectedValue;

      // Handle the payment method change
      // Possibly convert selectedValue to the enum value if needed
    }
  }
  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscriptions.unsubscribe();
  }
  // //Modal
  //   @ViewChild('temporaryPasswordModal',  { static: true, read: ViewContainerRef })
  //   vcr!: ViewContainerRef;

  //   openModalTemporaryPassword(view: TemplateRef<Element>) {
  //     this.modalService.open(this.vcr, view , {
  //       animations: {
  //         modal: {
  //           enter: 'enter-slide-down 0.8s',
  //         },
  //         overlay: {
  //           enter: 'fade-in 0.8s',
  //           leave: 'fade-out 0.3s forwards',
  //         },
  //       },
  //       size: {
  //         width: '36rem',
  //       },
  //     });
  //   }

  //   close() {
  //     this.modalService.close();
  //   }
}
