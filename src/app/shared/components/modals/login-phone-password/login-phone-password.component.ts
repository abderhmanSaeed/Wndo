import { LoginService } from './../../../../data/service/login/login.service';
import { SharedService } from './../../../services/shared.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { CountryPhoneCodeService } from '../../../../data/service/country-phone/country-phone-code.service';
import { OptionProps } from '../../../models';

@Component({
  selector: 'app-login-phone-password',
  templateUrl: './login-phone-password.component.html',
  styleUrl: './login-phone-password.component.scss'
})
export class LoginPhonePasswordComponent implements OnInit {
  countriesCode: OptionProps[] = [];
  // Define an EventEmitter for emitting the close event
  @Output() closeEvent = new EventEmitter<void>();
  constructor(private modalService: ModalService, private countryPhoneCodeService: CountryPhoneCodeService,
    private sharedService: SharedService, private loginService: LoginService) { }
  ngOnInit(): void {
  }
  login() {
    const requestBody = {
      phone: '1129480938',
      phoneCode: '+20',
      password: 'Test_123',
    };

    this.loginService.login(requestBody).subscribe(
      (response) => {
        console.log('Login successful', response);
        // Handle the response as needed
        if (response.isSuccess && response.responseData) {
          // Set tokens and user information in local storage
          this.sharedService.setToken(response.responseData.access_Token);
          this.sharedService.setRefreshToken(response.responseData.refresh_Token);
          // localStorage.setItem('access_token', response.responseData.access_Token);
          // localStorage.setItem('refresh_token', response.responseData.refresh_Token);
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
          this.close();
        }
      },
      (error) => {
        console.error('Login failed', error);
        // Handle errors
      }
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
  handleSelectedOption(selectedOption: string) {
    console.log('Selected option:', selectedOption);
    // Do whatever you need to do with the selected option in the parent component
  }
  close() {
    // Notify the service that the LOGIN button is clicked
    this.sharedService.notifyLoginButtonClicked();
    this.modalService.close();
  }
  onNameChanged(name: string) {
    console.log('Name changed:', name);
    // You can perform any other actions with the emitted 'name' value here
  }
}
