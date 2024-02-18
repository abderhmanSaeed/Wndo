import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../../../../data/service/auth/auth.service';

type ClassesProps = {
  label?: string,
  base?: string,
  input?: string,
  labelColor?: string
}
@Component({
  selector: 'app-input-filed',
  templateUrl: './input-filed.component.html',
  styleUrl: './input-filed.component.scss'
})
export class InputFiledComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() isFloating: boolean = false;
  @Input() name: string = "";
  @Input() DefaultName: boolean = false;

  @Input() value: string = "";
  @Input() classes?: ClassesProps;
  @Input() error: string = "";

  @Input() type: 'text' | 'number' = 'text'

  @Output() nameChanged: EventEmitter<string> = new EventEmitter<string>();
  userName$ = this.authService.userName$;
  isUserNameAvailable: boolean = false;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    if (this.name && !this.value) {
      // Subscribe to the userName$ observable
      this.authService.userName$.subscribe((userName) => {
        this.isUserNameAvailable = !!userName; // Set isUserNameAvailable based on the presence of userName
        if (userName && this.DefaultName) {
          this.value = userName;
        }
      });
    }
  }

  onNameChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.nameChanged.emit(inputValue);
  }

}
