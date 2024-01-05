import { SwiperDirective } from './directives/swiper-directive';
import { ModalComponent } from './components/modal/modal.component';
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
import { InputPasswordComponent } from './components/inputs/input-password/input-password.component';
import { HeaderOfPageComponent } from './components/header-of-page/header-of-page.component';
import { ProductMayLikeComponent } from './components/product/product-may-like/product-may-like.component';
import { register } from 'swiper/element/bundle';


register();

@NgModule({
  declarations: [
    IconComponent,
    ProductDetailsCardComponent,
    SwitchLanguageComponent,
    QuantityButtonComponent,
    ProductSnapshotCardComponent,
    ModalComponent,
    InputPasswordComponent,
    HeaderOfPageComponent,
    ProductMayLikeComponent,
    SwiperDirective
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
    ProductSnapshotCardComponent,
    ModalComponent,
    InputPasswordComponent,
    HeaderOfPageComponent,
    ProductMayLikeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
