import { QuantityButtonComponent } from './components/quantity-button/quantity-button.component';
import { ProductDetailsCardComponent } from './components/product/product-details-card/product-details-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from './components/icon/icon.component';
import { SwitchLanguageComponent } from './components/switch-language/switch-language.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    IconComponent,
    ProductDetailsCardComponent,
    SwitchLanguageComponent,
    QuantityButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IconComponent,
    ProductDetailsCardComponent,
    SwitchLanguageComponent,
    QuantityButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
