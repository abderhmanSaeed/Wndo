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
    private sharedService: SharedService) { }
  ngOnInit(): void {
    this.getCountryPhoneCodes();
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
