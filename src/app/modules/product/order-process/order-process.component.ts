import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-order-process',
  templateUrl: './order-process.component.html',
  styleUrl: './order-process.component.scss',
})
export class OrderProcessComponent {

}
