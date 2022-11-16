import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-New-Product',
  templateUrl: './New-Product.component.html',
  styleUrls: ['./New-Product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct!: IProduct;
  constructor(private _productService: ProductsService ,private router : Router) {
    // this._productService.addNewProduct(this.newProduct);

   }

  addNewProduct(_Id: any, _name: string, _price: any, _count: any) {
    this.newProduct = { ID: +_Id, Name: _name, Price: +_price, Quantity: +_count, Img: 'null', CateogryID: 1 }
    this._productService.pushNewProduct(this.newProduct);

    this.router.navigate(['/order']);
  }

  ngOnInit() {

  }



}
