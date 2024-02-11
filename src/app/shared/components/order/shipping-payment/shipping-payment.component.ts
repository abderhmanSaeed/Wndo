import { ShippingAddressService } from './../../../../data/service/shipping-address/shipping-address.service';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { OptionProps } from '../../../models';
import { CountryPhoneCodeService } from '../../../../data/service/country-phone/country-phone-code.service';
import { AuthService } from '../../../../data/service/auth/auth.service';
import { Subscription } from 'rxjs';
import { ShippingFessService } from '../../../../data/service/shippeng-fees/shipping-fess.service';

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

  districtsAndZones: any[] = [];
  private subscriptions = new Subscription();

  constructor(private shippingAddressService: ShippingAddressService, private countryPhoneCodeService: CountryPhoneCodeService, private authService: AuthService,
    private shippingFessService: ShippingFessService) { }
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
    // if (newValue === '0') {
    //   this.districtsAndZones = [];
    // } else {

    //   this.getDistrictsAndZones(newValue);
    // }
    // Additional logic when city changes, if needed
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

  paymentMethods = [
    {
      label: 'Cash on Delievery',
      name: 'cash',
      value: 'cash',
      desc: 'Extra fee will be applied',
      children: '<i class="fa-solid fa-wallet"></i>',
    },
    {
      label: 'Credit Card',
      name: 'creditCard',
      value: 'creditCard',
      desc: '',
      children: '<i class="fa-regular fa-credit-card"></i>',
    },
  ];


  shippingTimes = [
    {
      label: 'Any time',
      name: 'anyTime',
      value: 'any',

    },
    {
      label: 'Morning 9 am - 2 pm',
      name: 'morning',
      value: 'morning',
    },
    {
      label: 'Evening 2 pm - 8 pm',
      name: 'evening',
      value: 'evening',
    },
  ];
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
