import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RequestService } from './request.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProfileModule } from './profile/profile.module';
import { CoreModule } from './core/core.module';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    OrderComponent,
    MakeOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    CoreModule,
    HomeModule,
    ProfileModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
