import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-order-process',
  templateUrl: './order-process.component.html',
  styleUrl: './order-process.component.scss',
  standalone: true,
  imports: [SharedModule],
})
export class OrderProcessComponent {

}
