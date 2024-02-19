import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';

const routes: Routes = [
  { path: 'Success', component: SuccessComponent },
  { path: 'Fail', component: FailComponent },
  // You can add more routes specific to the PaymentModule here
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
