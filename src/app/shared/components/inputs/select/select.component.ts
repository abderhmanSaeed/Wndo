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
  showOptions = false; // Whether to show or hide the options list
  @Output() valueChange = new EventEmitter<string>(); // To emit changes
  searchTerm: string = '';
  filteredOptions: OptionProps[]; // This will hold the filtered options
  constructor() {
    this.filteredOptions = this.options; // Initially, filteredOptions is the same as options
  }
  ngOnChanges(): void {
    this.filteredOptions = this.options; // Update filteredOptions when inputs change
  }


  onChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.value = selectElement.value; // Update the internal value
    this.valueChange.emit(this.value); // Emit the new value
  }

  filterOptions(): void {
    if (!this.searchTerm) {
      this.filteredOptions = this.options; // If no search term, show all options
      this.valueChange.emit('0'); // Emit the new value

    } else {
      this.filteredOptions = this.options.filter(option =>
        option.label.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  selectOption(option: OptionProps): void {
    this.value = option.value; // Set the selected value
    this.valueChange.emit(this.value); // Emit the new value
    this.searchTerm = option.label; // Update the input display
    this.showOptions = false; // Hide the options list
  }


  toggleOptions(): void {
    this.showOptions = !this.showOptions; // Toggle the options list visibility
  }

  hideOptions(): void {
    setTimeout(() => { // Allow time for click event to register on options
      this.showOptions = false;
    }, 200);
  }

}
