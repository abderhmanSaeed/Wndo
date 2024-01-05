import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss'
})
export class InputPasswordComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() disabled: string = '';
  @Input() required: string = '';
  @Input() isFloating: boolean = false;
  @Input() name: string = "";
  @Input() value: string = "";

  type: 'text' | 'password' = 'password'
  isShowPassword: boolean = false


  toggleShowPassword() {
    this.isShowPassword = !this.isShowPassword

    if (this.isShowPassword) {
      this.type = 'password'
    } else {
      this.type = 'text'
    }
    console.log(this.isShowPassword)
  }
}
