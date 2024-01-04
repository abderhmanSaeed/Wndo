import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

const productRoutes: Routes = [
  {
    path: '',
    redirectTo: 'productDetails',
    pathMatch: 'full'
  },
  { path: 'productDetails', component: ProductDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' } // Default route for /dashboard
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
