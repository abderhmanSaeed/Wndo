import { TranslateModule } from '@ngx-translate/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OptionProps } from '../../../models';
import { CountryPhoneCodeService } from '../../../../data/service/country-phone/country-phone-code.service';
import { AuthService } from '../../../../data/service/auth/auth.service';

type ClassesProps = {
  label?: string;
  base?: string;
  input?: string;
  labelColor?: string;
};

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrl: './input-phone.component.scss',
})
export class InputPhoneComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() isFloating: boolean = false;
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() classes?: ClassesProps;
  @Input() error: string = '';
  @Input() options: any[] = [];
  countriesCode: OptionProps[] = [];
  phoneCode: string = '';
  userInfoCheck: boolean = false
  @Output() selectedOption: EventEmitter<string> = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  constructor(private countryPhoneCodeService: CountryPhoneCodeService, private authService: AuthService) { }
  ngOnInit(): void {
    this.getCountryPhoneCodes();
  }
  getCountryPhoneCodes(): void {
    this.countryPhoneCodeService.getCountryPhoneCodes()
      .subscribe(
        response => {
          if (response.isSuccess) {
            this.countriesCode = response.responseData.map((code: string) => ({ label: code, value: code }));
            this.selectedOption.emit(this.countriesCode[0].label);
            let userInfo = this.authService.getUserInfo();
            if (userInfo) {
              this.value = userInfo.phoneCode + userInfo.phoneNumber;
              this.userInfoCheck = true;
            }
            console.log(userInfo);            // this.authService.phoneNumber$.subscribe((phoneNumber) => {
            //   if (phoneNumber) {
            //     // this.authService.phoneCode$.subscribe((phoneCode) => {
            //     //   if (phoneCode) {
            //     //     this.value = phoneNumber + phoneCode;

            //     //   }
            //     // });
            //     this.value = phoneNumber;
            //   }

            // });
            // this.authService.phoneCode$.subscribe((phoneCode) => {
            //   if (phoneCode) {
            //     this.value += phoneCode;
            //   }
            // });
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
  onOptionSelected(event: any) {
    // Extract the option label from the event or modify this based on your component's logic
    const optionLabel = event?.target?.id;
    if (optionLabel && optionLabel.includes('+')) {
      this.selectedOption.emit(optionLabel);
    }
  }
  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(inputValue);
  }
  // Assuming this is part of your component class
  onDropdownClick(event: any): void {
    // Your logic for handling the dropdown click goes here
    console.log('Dropdown clicked!', event);
    const optionLabel = event?.target?.innerText;
    if (optionLabel && optionLabel.includes('+')) {
      this.selectedOption.emit(optionLabel);
    }
    // You can also prevent the default behavior if needed
    event.preventDefault();
  }

  countriesCodeStatic = [
    {
      label: '+20',
      value: '+20',
    },
    {
      label: '+966',
      value: '+966',
    },
    {
      label: '+971',
      value: '+971',
    },
    {
      label: '+965',
      value: '+965',
    },
    {
      label: '+974',
      value: '+974',
    },
    {
      label: '+973',
      value: '+973',
    },
    {
      label: '+968',
      value: '+968',
    },

  ];
  // countriesCode = [
  //   {
  //     name: 'usa',
  //     label: '+1',
  //     value: '+1',
  //     image: '🇦🇩'
  //   },
  //   {
  //     name: 'United Kingdom',
  //     label: '+1',
  //     value: '+1',
  //     image: '🇦🇩'
  //   },
  //   {
  //     name: 'Australia',
  //     label: '+61',
  //     value: '+61',
  //     image: '&#Unicode;'
  //   },
  //   {
  //     name: 'Germany',
  //     label: '+49',
  //     value: '+49',
  //     image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
  //   },
  //   {
  //     name: 'France',
  //     label: '+33',
  //     value: '+33',
  //     image: '🇦🇩'
  //   },
  // ];
}
