import { Component, EventEmitter, Input, Output } from '@angular/core';

type OptionProps = {
  label: string,
  value: string,
  name: string,
  desc?: string,
  children?: any
}

type ClassesProps = {
  label?: string,
  base?: string,
  input?: string,
  labelColor?: string
  inputContainer?: string
}

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
  @Input() options:OptionProps[] = [];


  @Input() label: string = '';
  @Input() subtext?: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() isFloating: boolean = false;
  @Input() name: string = "";
  @Input() value: string = "";
  @Input() classes?: ClassesProps;
  @Input() error: string = "";
  @Input() color: 'primary' | 'warning' | 'danger' = "primary";

  @Output() change: EventEmitter<string> = new EventEmitter<string>();


  getRadioClassesColor(color: string): { [key: string]: boolean } {
    return {
      'radio__input--primary': color === 'primary',
      'radio__input--danger': color === 'danger',
      'radio__input--warning': color === 'warning'
    };
  }


  onChange(value: string): void {
    this.value = value;
    this.change.emit(value);
  }
}
