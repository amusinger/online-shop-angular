import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule',
        //component: HomeComponent
      },
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      },
      {
        path: '',
        component: FooterComponent,
        outlet: 'footer'
      },
      {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule',
      },
      {
        path: 'product/:id', 
        component: ProductComponent
      },
      {
        path: 'category/:id', 
        component: CategoryComponent
      },
      {
        path: 'cart', 
        component: CartComponent
      },
      {
        path: 'order', 
        component: OrderComponent
      },
      {
        path: 'order/:id', 
        component: MakeOrderComponent
      },
      {
        path: 'search/:word',
        component: SearchResultsComponent,
      },
      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
