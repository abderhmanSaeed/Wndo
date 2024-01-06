import { Component, Input } from '@angular/core';

type ClassesProps = {
  label?: string;
  base?: string;
  input?: string;
  labelColor?: string;
};

type OptionProps = {
  label: string,
  value: string,
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input() options: OptionProps[] = [];
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() isFloating: boolean = false;
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() classes?: ClassesProps;
  @Input() error: string = '';


}
