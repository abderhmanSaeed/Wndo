import { Component, Input } from '@angular/core';

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
export class InputPhoneComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() isFloating: boolean = false;
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() classes?: ClassesProps;
  @Input() error: string = '';

  countriesCode = [
    {
      name: 'usa',
      label: '+1',
      value: '+1',
      image: '🇦🇩'
    },
    {
      name: 'United Kingdom',
      label: '+1',
      value: '+1',
      image: '🇦🇩'
    },
    {
      name: 'Australia',
      label: '+61',
      value: '+61',
      image: '&#Unicode;'
    },
    {
      name: 'Germany',
      label: '+49',
      value: '+49',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
    },
    {
      name: 'France',
      label: '+33',
      value: '+33',
      image: '🇦🇩'
    },
  ];
}
