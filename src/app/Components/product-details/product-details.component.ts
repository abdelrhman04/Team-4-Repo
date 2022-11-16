import { IProduct } from './../../Models/IProduct';
import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//in case on dosen't import
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  _product: IProduct | undefined;
  _ProductIDsList: number[] = [];
  _currentProductID: number = 0;
  _currentIndex: number = 0;

  constructor(private productsService: ProductsService,
              private activeRoute:ActivatedRoute,
              private location : Location ,
              private router : Router) {

   }

  ngOnInit(): void {
    //find URL parameter  by get method that take one parameter which is sended in Route
    // let prdId_URL = this.activeRoute.snapshot.paramMap.get('prdID');

    // this._currentProductID = (this.activeRoute.snapshot.paramMap.get('prdID')) ?
    // Number((this.activeRoute.snapshot.paramMap.get('prdID'))) : 0;

    this._ProductIDsList = this.productsService.getPrdIdsList();

    this.activeRoute.paramMap.subscribe(item => {
    this._currentProductID = (item.get('prdID')) ? Number(item.get('prdID')) : 0;

    let availableProduct =  this.productsService.getProductbyID(this._currentProductID);

    if (availableProduct) {

        this._product = availableProduct;
    }
    else {

        alert("Product Not Found")
        this.location.back();
    }

    })
  }

  nextPage() {
    this._currentIndex = this._ProductIDsList.findIndex(c => c == this._currentProductID)
    this.router.navigate(['/product',this._ProductIDsList[ ++this._currentIndex]])
  }

  prevPage() {

    this._currentIndex = this._ProductIDsList.findIndex(c => c == this._currentProductID)
    this.router.navigate(['/product',this._ProductIDsList[ --this._currentIndex]])
  }
  goBack() {
    this.location.back();
  }



}
