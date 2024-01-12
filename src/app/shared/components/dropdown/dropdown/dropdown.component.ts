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
  input?: string;
  labelColor?: string;
  btn?: string
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() options:OptionProps[] = []
  @Input() label?:string = '';
  @Input() classes?:ClassesProps;
  @Input() dropdownIcon?:string = "";
  @Input() showSelectedValue?:boolean = true;
  selectedValue:string = this.options.length > 0 ? this.options[0].label : '';


  isDropdownVisible = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;

    if (this.isDropdownVisible) {
      const buttonElement =
        this.elementRef.nativeElement.querySelector('#changeLangButton');
      const dropdownElement =
        this.elementRef.nativeElement.querySelector('#dropdown');

      // Get the button's position relative to the viewport
      const buttonRect = buttonElement.getBoundingClientRect();

      // Set styles for the dropdown using Renderer2
      this.renderer.setStyle(dropdownElement, 'position', 'absolute');
      this.renderer.setStyle(
        dropdownElement,
        'top',
        `${buttonRect.bottom + window.scrollY}px`
      );
      this.renderer.setStyle(
        dropdownElement,
        'left',
        `${buttonRect.left + window.scrollX}px`
      );
    }
  }

  onSelectValue(option: { label: string; value: string }) {
    this.selectedValue = option.value;
    this.isDropdownVisible = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;

    // Check if the clicked element is outside the dropdown
    if (!this.elementRef.nativeElement.contains(clickedElement)) {
      this.isDropdownVisible = false;
    }
  }
}
