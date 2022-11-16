import { NewProductComponent } from './Components/New-Product/New-Product.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductComponent } from './Components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNotFoundComponent } from './Components/error-not-found/error-not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'order', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'product', component: ProductComponent },
//   { path: 'order', component: OrderComponent },
//   {path:'**',component:ErrorNotFoundComponent}
// ];

const routes: Routes = [
    {path:'',component:LayoutComponent,children:[
    {path:'',redirectTo:'order',pathMatch:'full'},// Default path
    {path:'home',component: HomeComponent},
    {path:'products',component:ProductComponent},
    {path:'order', component: OrderComponent },
    {path:'product/:prdID', component: ProductDetailsComponent },
    {path:'addproduct',component:NewProductComponent},
  ]
  },
    {path:'**',component:ErrorNotFoundComponent}


  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
