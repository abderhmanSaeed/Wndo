import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { OptionProps } from '../../../models';
import { CountryPhoneCodeService } from '../../../../data/service/country-phone/country-phone-code.service';
import { AuthService } from '../../../../data/service/auth/auth.service';

@Component({
  selector: 'app-shipping-payment',
  templateUrl: './shipping-payment.component.html',
  styleUrl: './shipping-payment.component.scss',
})
export class ShippingPaymentComponent implements OnInit {
  countriesCode: OptionProps[] = [];
  products: any[] = []; // Assuming your products have a certain structure

  constructor(private modalService: ModalService, private countryPhoneCodeService: CountryPhoneCodeService, private authService: AuthService) { }
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
  handleSelectedOption(selectedOption: string) {
    console.log('Selected option:', selectedOption);
    // Do whatever you need to do with the selected option in the parent component
  }
  onNameChanged(name: string) {
    console.log('Name changed:', name);
    // You can perform any other actions with the emitted 'name' value here
  }
  cities = [
    { label: 'Cairo', value: 'cairo' },
    { label: 'Alex', value: 'alex' },
  ];

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
