import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.scss'
})
export class SwitchLanguageComponent {
  isDropdownVisible = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {}

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

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;

    // Check if the clicked element is outside the dropdown
    if (!this.elementRef.nativeElement.contains(clickedElement)) {
      this.isDropdownVisible = false;
    }
  }
}
