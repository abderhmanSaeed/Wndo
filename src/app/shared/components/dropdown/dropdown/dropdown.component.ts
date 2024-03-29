import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

type OptionProps = {
  label: string,
  value: string,
  startContentMenu?: any,
  endContentMenu?: any
}

type ClassesProps = {
  label?: string;
  base?: string;
  menuBtn?: string;
  labelColor?: string;
  toggleBtn?: string;
  list?: string;
  listItem?: string;
  dropdownMenu?: string
};


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() id: string = "";
  @Input() options:OptionProps[] = []
  @Input() selectedValue: string = "";
  @Input() showSelectedValue: boolean = true;
  @Input() label: string = "";
  @Input() dropdownIcon: string = "";
  @Input() classes: any;
  @Output() valueChanged = new EventEmitter<any>();
  isOpen: boolean = false;

  @Input() iconTemplate?: TemplateRef<any>;


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  onSelectValue(option: any) {
    this.selectedValue = option.label;
    this.valueChanged.emit(option.value);
    this.closeDropdown();
  }

  trackByFn(index: any, item: any) {
    return item.value;
  }
}
