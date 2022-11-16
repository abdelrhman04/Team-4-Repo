// import { IProduct } from 'src/app/Models/IProduct';
import { IProduct } from './../Models/IProduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ProductList: IProduct[];


  constructor() {

    this.ProductList = [
      {ID:3,Name:'Iphone', Price:22500, Quantity:5, Img:'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg',CateogryID:1},
      {ID:4,Name:'Oppo', Price:10000, Quantity:9, Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDrtLGDy6olTfmJaqkLoYKwk7nziYYg0ymQ&usqp=CAU',CateogryID:1},
      {ID:8,Name:'Mac', Price:20000, Quantity:5, Img:'https://m.media-amazon.com/images/I/51tvYgjJB-L._AC_SX679_.jpg',CateogryID:2},
      {ID:22,Name:'HP', Price:15000, Quantity:0, Img:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06745496.png',CateogryID:2},
      {ID:36,Name:'LG', Price:4000, Quantity:20, Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtzd3EPh6Odmt5B1Edc3JDRMClcgQaLxjBA&usqp=CAU',CateogryID:3},
      {ID:42,Name:'Toshipa', Price:45000, Quantity:7, Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGi6f77mMcrzUIJywjWEN-ND9hP6Xh4AaBTw&usqp=CAU',CateogryID:3},
    ]

  }

  getAllProducts() :IProduct[]{
    return this.ProductList;
  }

  getProductbyID(_productId : number):IProduct |undefined {

    return this.ProductList.find(product => product.ID == _productId)
  }

  getProductsbyCatID(CID: any): IProduct[] {
    if (CID == 0) {
      return this.getAllProducts();
    }
    else {
      return this.ProductList.filter(_product=>_product.CateogryID == CID )
    }
  }

  getPrdIdsList(): number[] {

    return this.ProductList.map(_products => _products.ID);
  }

  pushNewProduct(prd:IProduct) {
    this.ProductList.push(prd);
  }



}
