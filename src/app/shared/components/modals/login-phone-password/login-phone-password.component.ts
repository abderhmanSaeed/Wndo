import { SignUpComponent } from './../sign-up/sign-up.component';
import { AuthService } from './../../../../data/service/auth/auth.service';
import { LoginService } from './../../../../data/service/login/login.service';
import { SharedService } from './../../../services/shared.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { CountryPhoneCodeService } from '../../../../data/service/country-phone/country-phone-code.service';
import { OptionProps } from '../../../models';
import { ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common'; // Import Location

@Component({
  selector: 'app-login-phone-password',
  templateUrl: './login-phone-password.component.html',
  styleUrl: './login-phone-password.component.scss'
})
export class LoginPhonePasswordComponent implements OnInit {
  countriesCode: OptionProps[] = [];
  selectedCountryCode: string | null = null;
  phoneValue: string = '';
  passwordValue: string = '';
  showForgotPasswordMessage: boolean = false;
  InvalidMessage: string = ''; //
  invalid: boolean = false;
  showInvalidMessage: boolean = false;
  enterYourMessage: string = 'Plase Enter Your Phone'; //
  enterMessage: boolean = false;
  // Define an EventEmitter for emitting the close event
  @Output() closeEvent = new EventEmitter<void>();
  userNAme: any;
  constructor(private modalService: ModalService, private countryPhoneCodeService: CountryPhoneCodeService,
    private sharedService: SharedService, private authService: AuthService, private loginService: LoginService, private cdr: ChangeDetectorRef,
    private location: Location) { }
  ngOnInit(): void {
  }
  login() {
    // Check if all required values are available
    if (this.selectedCountryCode && this.phoneValue && this.passwordValue) {
      this.enterMessage = false;

      if (this.showInvalidMessage) {
        this.showInvalidMessage = false;
      }

      const requestBody = {
        phone: this.phoneValue,
        phoneCode: this.selectedCountryCode,
        password: this.passwordValue,
      };

      this.loginService.login(requestBody).subscribe(
        (response) => {
          console.log('Login successful', response);
          // Handle the response as needed
          if (response.isSuccess && response.responseData) {
            // Set tokens and user information in local storage
            this.authService.setToken(response.responseData.access_Token);
            this.authService.setRefreshToken(response.responseData.refresh_Token);
            localStorage.setItem('user_info', JSON.stringify({
              userName: response.responseData.userName,
              phoneNumber: response.responseData.phoneNumber,
              phoneCode: response.responseData.phoneCode
            }));
            // Calculate and store expiration time in local storage
            const expiresInInSeconds = response.responseData.expires_In;
            const expiresInDays = expiresInInSeconds / (60 * 60 * 24);
            const expiresInHours = (expiresInInSeconds % (60 * 60 * 24)) / (60 * 60);
            const expiresInMinutes = (expiresInInSeconds % (60 * 60)) / 60;

            localStorage.setItem('token_expiration', `Token will expire in ${expiresInDays} days, ${expiresInHours} hours, and ${expiresInMinutes} minutes.`);
            // Update AuthService with authentication status and user information
            this.authService.setAuthenticated(true);
            this.authService.setUserName(response.responseData.userName);
            this.authService.setPhoneNumber(response.responseData.phoneNumber);
            this.authService.setPhoneCode(response.responseData.phoneCode);
            this.cdr.detectChanges(); // Manually trigger change detection
            this.userNAme = response.responseData.userName;
            this.close();
          }
          else {
            this.InvalidMessage = response?.errorMessage;
            this.showInvalidMessage = true;
            this.invalid = true;
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

  forgotPassword() {
    this.showInvalidMessage = false;
    this.invalid = false;
    // Check if all required values are available
    if (this.selectedCountryCode && this.phoneValue) {
      this.enterMessage = false;

      const requestBody = {
        phone: this.phoneValue,
        phoneCode: this.selectedCountryCode,
      };

      this.loginService.forgotPassword(requestBody).subscribe(
        (response) => {
          console.log('forgot Password', response);
          // Handle the response as needed
          if (response.isSuccess && response.responseData) {
            // Set tokens and user information in local storage
            this.InvalidMessage = response?.responseData
            this.showForgotPasswordMessage = true;
            this.showInvalidMessage = true;

            // this.close();
          }
          else {
            this.InvalidMessage = response?.errorMessage;
            this.showInvalidMessage = true;
            this.invalid = true;
          }
        },
        (error) => {
          console.error('Login failed', error);
          // Handle errors
        }
      );
    } else {
      this.enterMessage = true;
      // Handle the case where not all required values are available
      console.error('Please provide all required values.');
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
  NavigateToSignup() {
    this.modalService.close();
    this.handleSignUp()

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
    // Check if the current URL includes '/product/productOrders'
    if (!this.location.path().includes('/product/productOrders')) {
      // If the URL does not include '/product/productOrders', reload the page
      window.location.reload();
    }
    this.authService.setShowLoginMessage(true);


  }
  onNameChanged(name: string) {
    console.log('Name changed:', name);
    // You can perform any other actions with the emitted 'name' value here
  }
}
