import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

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
  listItem?: string
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() options:OptionProps[] = []
  @Input() label?:string = '';
  @Input() id:string = 'dropdown';
  @Input() classes?:ClassesProps;
  @Input() dropdownIcon?:string = "";
  @Input() showSelectedValue?:boolean = true;
  selectedValue:string = this.options.length > 0 ? this.options[0].label : '';


  isDropdownVisible = false;

  onSelectValue(option: { label: string; value: string }) {
    this.selectedValue = option.value;
    this.isDropdownVisible = false;
  }

}
