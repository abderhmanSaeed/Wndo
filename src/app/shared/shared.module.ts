import { OrderConfirmedModal } from './components/modals/order-confirmed-modal/order-confirmed-modall.component';
import { ModalComponent } from './components/modal/modal.component';
import { SelectComponent } from './components/inputs/Select/select.component';
import { InputFiledComponent } from './components/inputs/input-filed/input-filed.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { SwiperDirective } from './directives/swiper-directive';
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
import { GalleryComponent } from './components/product/gallery/gallery.component';
import { StepComponent } from './components/stepper/step/step.component';
import { ShippingPaymentComponent } from './components/order/shipping-payment/shipping-payment.component';
import { InputPhoneComponent } from './components/inputs/input-phone/input-phone.component';
import { DropdownComponent } from './components/dropdown/dropdown/dropdown.component';
import { RadioComponent } from './components/radio/radio.component';
import { VisualProductSummaryComponent } from './components/product/visual-product-summary/visual-product-summary.component';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { OrderSummaryCardComponent } from './components/order/order-summary-card/order-summary-card.component';
import { TemporaryPasswordSetModalComponent } from './components/modals/temporary-password-set-modal/temporary-password-set-modal.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { ModalContentComponent } from './components/modal/modal-content/modal-content.component';
import { ConfirmationComponent } from './components/order/confirmation/confirmation.component';
import { VideoModalComponent } from './components/product/video-modal/video-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';


register();

@NgModule({
  declarations: [
    IconComponent,
    ProductDetailsCardComponent,
    SwitchLanguageComponent,
    QuantityButtonComponent,
    ProductSnapshotCardComponent,
    InputPasswordComponent,
    HeaderOfPageComponent,
    ProductMayLikeComponent,
    SwiperDirective,
    GalleryComponent,
    StepperComponent,
    StepComponent,
    ShippingPaymentComponent,
    InputFiledComponent,
    InputPhoneComponent,
    InputPhoneComponent,
    DropdownComponent,
    SelectComponent,
    RadioComponent,
    VisualProductSummaryComponent,
    CheckoutComponent,
    OrderSummaryCardComponent,
    TemporaryPasswordSetModalComponent,
    ModalComponent,
    LoginModalComponent,
    ModalContentComponent,
    LoginModalComponent,
    ConfirmationComponent,
    OrderConfirmedModal,
    VideoModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule.forRoot()
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
    InputPasswordComponent,
    HeaderOfPageComponent,
    ProductMayLikeComponent,
    GalleryComponent,
    StepperComponent,
    StepComponent,
    ShippingPaymentComponent,
    InputFiledComponent,
    InputPhoneComponent,
    DropdownComponent,
    SelectComponent,
    RadioComponent,
    VisualProductSummaryComponent,
    CheckoutComponent,
    OrderSummaryCardComponent,
    TemporaryPasswordSetModalComponent,
    ModalComponent,
    ModalContentComponent,
    LoginModalComponent,
    ConfirmationComponent,
    OrderConfirmedModal
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
