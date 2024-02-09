import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyOrdersDetailsComponent } from './my-orders-details/my-orders-details.component';
import { OrderProcessComponent } from './order-process/order-process.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';
import { AuthGuard } from '../../core/guard/auth.guard';

const productRoutes: Routes = [
  {
    path: '',
    redirectTo: 'productDetails',
    pathMatch: 'full'
  },
  { path: 'productDetails', component: ProductDetailsComponent },
  { path: 'productOrders', component: ProductOrdersComponent },
  { path: 'orderProcess', component: OrderProcessComponent, canActivate: [AuthGuard] },
  { path: 'productOffers', component: ProductOffersComponent },
  { path: 'myOrders', component: MyOrdersComponent , canActivate: [AuthGuard]},
  { path: 'myOrdersDetails', component: MyOrdersDetailsComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'productDetails', pathMatch: 'full' } // Default route for /product
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
