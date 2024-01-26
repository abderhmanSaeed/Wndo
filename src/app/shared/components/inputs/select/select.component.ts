import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() id?: string = '';
  @Input() name: string = '';
  @Input() value?: string = '';
  @Input() classes?: ClassesProps;
  @Input() error: string = '';

  @Output() valueChange = new EventEmitter<string>(); // To emit changes

  onChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.value = selectElement.value; // Update the internal value
    this.valueChange.emit(this.value); // Emit the new value
  }

}
