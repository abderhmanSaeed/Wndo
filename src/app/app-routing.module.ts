import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { CONFIG } from './shared/configs';


const routes: Routes = [
  // Other routes
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      { path: CONFIG.dashboard.children.home.name.toLowerCase(), loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule) },
      { path: CONFIG.product.name.toLowerCase(), loadChildren: () => import('./modules/product/product-routing.module').then(m => m.ProductRoutingModule) },
      {
        path: CONFIG.contact.name,
        loadChildren: () => import('./modules/contact/contact-routing.module').then(m => m.ContactRoutingModule)
      },
      {
        path: CONFIG.about.name.toLowerCase(),
        loadChildren: () => import('./modules/about/about-routing.module').then(m => m.AboutRoutingModule)
      },
      // Wildcard route for handling unknown routes
      { path: '**', redirectTo: '/product' } // Redirect to a 404 page or any other route
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
