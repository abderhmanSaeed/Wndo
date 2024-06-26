import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { SafeUrlPipe } from './pipes/safeUrl.pipe';
import { AuthInterceptorService } from './../core/interceptors/response-interceptor/auth-interceptor.service';
import { LoaderInterceptor } from './../core/interceptors/loader-interceptor/loader.interceptor';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { TokenInterceptor } from '../core/interceptors/auth-interceptor/token.interceptor';
import { CoreModule } from './../core/core.module';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
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
import { LoadingComponent } from './components/loading/loading.component';
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
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MyOrderCardComponent } from './components/order/my-order-card/my-order-card.component';
import { TranslationService } from '../data/service/translation/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { LoginPhonePasswordComponent } from './components/modals/login-phone-password/login-phone-password.component';
import { AddProductToCardModalComponent } from './components/modals/add-product-to-card-modal/add-product-to-card-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductSummaryWithSellerComponent } from './components/product/product-summary-with-seller/product-summary-with-seller.component';
import { SignUpComponent } from './components/modals/sign-up/sign-up.component';
import { FreeShippingComponent } from './components/free-shipping/free-shipping.component';
import { ItemOrdersDetailsComponent } from './components/product/item-orders-details/item-orders-details.component';
import { ConfirmationDetailsComponent } from './components/product/confirmation-details/confirmation-details.component';
import { RefundOrderComponent } from './components/modals/refund-order/refund-order.component';
import { CancelOrderComponent } from './components/modals/cancel-order/cancel-order.component';
import { IsEmptyComponent } from './components/order/is-empty/is-empty.component';
import { ConfirmationModalComponent } from './components/modals/confirmation-modal/confirmation-modal.component';
import { EditPRoductToCartModalComponent } from './components/modals/edit-product-to-cart-modal/edit-product-to-cart-modal.component';
import { OrderCheckoutConfirmationComponent } from './components/order/order-checkout-confirmation/order-checkout-confirmation.component';
import { EditPaymentComponent } from './components/modals/edit-payment/edit-payment.component';
import { EmptyCartModalComponent } from './components/modals/empty-cart-modal/empty-cart-modal.component';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';
import { BeautyStoreComponent } from './components/home/beauty-store/beauty-store.component';

register();

@NgModule({
  declarations: [
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
    ConfirmationComponent,
    OrderConfirmedModal,
    VideoModalComponent,
    MyOrderCardComponent,
    LoginPhonePasswordComponent,
    AddProductToCardModalComponent,
    FilterByPipe,
    ProductSummaryWithSellerComponent,
    SignUpComponent,
    LoadingComponent,
    FreeShippingComponent,
    ItemOrdersDetailsComponent,
    ConfirmationDetailsComponent,
    RefundOrderComponent,
    CancelOrderComponent,
    IsEmptyComponent,
    ConfirmationModalComponent,
    EditPRoductToCartModalComponent,
    SafeUrlPipe,
    OrderCheckoutConfirmationComponent,
    EditPaymentComponent,
    EmptyCartModalComponent,
    HomeBannerComponent,
    HomeProductCardComponent,
    BeautyStoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule,
    ModalModule.forRoot(),
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    TranslateModule,
    NgSelectModule,
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ProductDetailsCardComponent,
    SwitchLanguageComponent,
    QuantityButtonComponent,
    ProductSnapshotCardComponent,
    InputPasswordComponent,
    HeaderOfPageComponent,
    ProductMayLikeComponent,
    GalleryComponent,
    CoreModule,
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
    OrderConfirmedModal,
    MyOrderCardComponent,
    TranslateModule,
    AddProductToCardModalComponent,
    FilterByPipe,
    NgSelectModule,
    ProductSummaryWithSellerComponent,
    LoadingComponent,
    FreeShippingComponent,
    ItemOrdersDetailsComponent,
    ConfirmationDetailsComponent,
    RefundOrderComponent,
    CancelOrderComponent,
    IsEmptyComponent,
    SafeUrlPipe,
    EmptyCartModalComponent,
    HomeBannerComponent,
    HomeProductCardComponent,
    BeautyStoreComponent
  ],
  providers: [
    TranslationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
