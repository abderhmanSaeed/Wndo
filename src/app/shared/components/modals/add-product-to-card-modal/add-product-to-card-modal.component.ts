import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product-to-card-modal',
  templateUrl: './add-product-to-card-modal.component.html',
  styleUrl: './add-product-to-card-modal.component.scss'
})
export class AddProductToCardModalComponent {
    optionsModal: any[] = [
    {
      label: "one",
      value: "one"
    }
  ]
}
