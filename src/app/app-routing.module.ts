import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { CONFIG } from './shared/configs';


const routes: Routes = [
  // Other routes
  {
    path: '',
    component: ContentLayoutComponent,
    // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      // Add your DashboardModule route
      { path: 'home', loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule) },
      {
        path: CONFIG.contact.name,
        loadChildren: () =>
          import('./modules/contact/contact-routing.module').then(m => m.ContactRoutingModule)
      },
      {
        path: CONFIG.about.name.toLowerCase(),
        loadChildren: () =>
          import('./modules/about/about-routing.module').then(m => m.AboutRoutingModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
