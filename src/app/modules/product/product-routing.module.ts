import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderProcessComponent } from './order-process/order-process.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';

const productRoutes: Routes = [
  {
    path: '',
    redirectTo: 'productDetails',
    pathMatch: 'full'
  },
  { path: 'productDetails', component: ProductDetailsComponent },
  { path: 'productOrders', component: ProductOrdersComponent },
  { path: 'orderProcess', component: OrderProcessComponent },
  { path: 'productOffers', component: ProductOffersComponent },
  { path: 'myOrders', component: MyOrdersComponent },
  { path: '', redirectTo: 'productDetails', pathMatch: 'full' } // Default route for /product
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
