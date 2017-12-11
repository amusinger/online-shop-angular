import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RequestService } from '../request.service';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeRoutingModule } from './home-routing.module';
import { CdkTableModule } from '@angular/cdk/table';
import { CoreModule } from '../core/core.module';

import {CarouselComponent} from "angular2-carousel";
import { HomeCategoriesComponent } from './home-categories/home-categories.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ],
  declarations: [HomeComponent, HomeProductsComponent, HomeCategoriesComponent],
  providers: [RequestService]
})
export class HomeModule { 
  @ViewChild('topCarousel') topCarousel: CarouselComponent;
  toggle(){
    this.topCarousel.toggleMode();
  }
}
