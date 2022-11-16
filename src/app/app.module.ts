import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ProductComponent } from './Components/product/product.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ErrorNotFoundComponent } from './Components/error-not-found/error-not-found.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LightBoxDirective } from './Directives/light-box.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    ProductComponent,
    OrderComponent,
    ProductDetailsComponent,
    ErrorNotFoundComponent,
    LayoutComponent,
    LightBoxDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
