import { AuthService } from './../../../../data/service/auth/auth.service';
import { LoginService } from './../../../../data/service/login/login.service';
import { SharedService } from './../../../services/shared.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { CountryPhoneCodeService } from '../../../../data/service/country-phone/country-phone-code.service';
import { OptionProps } from '../../../models';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  countriesCode: OptionProps[] = [];
  selectedCountryCode: string | null = null;
  phoneValue: string = '';
  passwordValue: string = '';
  NameValue: string = '';

  // Define an EventEmitter for emitting the close event
  @Output() closeEvent = new EventEmitter<void>();
  showNotification: boolean = false;
  notificationMessage: string = '';
  constructor(private modalService: ModalService, private countryPhoneCodeService: CountryPhoneCodeService,
    private sharedService: SharedService, private authService: AuthService, private loginService: LoginService) { }
  ngOnInit(): void {
  }
  signUp() {
    // Check if all required values are available
    if (this.selectedCountryCode && this.phoneValue && this.NameValue) {
      const requestBody = {
        phone: this.phoneValue,
        code: this.selectedCountryCode,
        name: this.NameValue,
      };

      this.loginService.signUp(requestBody).subscribe(
        (response) => {
          console.log('sign up successful', response);
          // Handle the response as needed
          if (response.isSuccess && response.responseData) {
            // Set tokens and user information in local storage
            this.notificationMessage = response?.responseData?.message
            this.showNotification === true;
            // this.close();
          }
        },
        (error) => {
          console.error('Login failed', error);
          // Handle errors
        }
      );
    } else {
      // Handle the case where not all required values are available
      console.error('Please provide all required values.');
    }
  }
// Method to close the notification
closeNotification() {
  this.showNotification = false;
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
  handleSelectedOption(selectedCountryCode: string): void {
    this.selectedCountryCode = selectedCountryCode;
    // Do whatever you need to do with the selected option in the parent component
  }

  handleInputValueChange(phoneValue: string): void {
    this.phoneValue = phoneValue;
    // Do something with the updated value
  }

  handlePasswordValueChange(passwordValue: string): void {
    this.passwordValue = passwordValue;
    // Do something with the updated password value
  }
  close() {
    // Notify the service that the LOGIN button is clicked
    this.sharedService.notifyLoginButtonClicked();
    this.modalService.close();
  }
  onNameChanged(name: string) {
    this.NameValue = name;
    console.log('Name changed:', name);
    // You can perform any other actions with the emitted 'name' value here
  }
}
