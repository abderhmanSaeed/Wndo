import { QuantityButtonComponent } from './components/quantity-button/quantity-button.component';
import { ProductDetailsCardComponent } from './components/product/product-details-card/product-details-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from './components/icon/icon.component';
import { SwitchLanguageComponent } from './components/switch-language/switch-language.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductSnapshotCardComponent } from './components/product/product-snapshot-card/product-snapshot-card.component';

@NgModule({
  declarations: [
    IconComponent,
    ProductDetailsCardComponent,
    SwitchLanguageComponent,
    QuantityButtonComponent,
    ProductSnapshotCardComponent,
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
    QuantityButtonComponent,
    ProductSnapshotCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
