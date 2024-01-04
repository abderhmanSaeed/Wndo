import { ProductDetailsCardComponent } from './../../shared/components/product-details-card/product-details-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './page/product-details.component';
import { SwitchLanguageComponent } from '../../shared/components/switch-language/switch-language.component';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    ProductDetailsComponent,
    SwitchLanguageComponent,
    ProductDetailsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailsModule
  ],
  exports: [ProductDetailsCardComponent]
})
export class ProductDetailsModule { }
