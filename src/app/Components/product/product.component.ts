import { ProductsService } from './../../Services/products.service';
import { CartOrders } from './../../Models/CartOrders';
import { DiscountOffers } from './../../Models/DiscountOffers.enum';
import { Store } from './../../Models/Store';
import { IProduct } from './../../Models/IProduct';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']


})




export class ProductComponent implements OnInit,OnChanges {

  storeInfo: Store;
  Switch: boolean = true;
  clientName: string;
  discount: DiscountOffers;
  // ProductList: Product[];
  Checked: number = 0;
  CategoryList: ICategory[];

  orderTotalPrice: number = 0;
  ProductbyCategory: IProduct[] = [];
  cartList: CartOrders = new CartOrders();
  // cartList!: CartOrders[] = [];
  // cart: CartOrders[]|undefined;

  @Input() categoryID: Number = 0;

  @Output() productOutput: EventEmitter<CartOrders>;


  constructor(private _productService : ProductsService,private route :Router) {

    this.CategoryList = [
      { ID: 1, Name: "Mobile" },
      { ID:2,Name:"Labtop"},
      { ID:3,Name:"Tv"}
    ]
    this.productOutput= new EventEmitter<CartOrders>();

    //#region Store
    this.storeInfo = new Store('Alahly', ['Elgzera', 'Madint Nasr','Eltagmo3'],'https://i2.wp.com/see.news/images/2021/02/Al-Ahly-1.jpg?resize=920%2C550&ssl=1')
    this.discount = DiscountOffers.Second;
    this.clientName = 'Mr Afsha';
    //#endregion

    //#region intialize array with objects of Product
    // this.ProductList = [
    //   {ID:3,Name:'Iphone', Price:22500, Quantity:5, Img:'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg',CateogryID:1},
    //   {ID:4,Name:'Oppo', Price:10000, Quantity:9, Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDrtLGDy6olTfmJaqkLoYKwk7nziYYg0ymQ&usqp=CAU',CateogryID:1},
    //   {ID:8,Name:'Mac', Price:20000, Quantity:5, Img:'https://m.media-amazon.com/images/I/51tvYgjJB-L._AC_SX679_.jpg',CateogryID:2},
    //   {ID:22,Name:'HP', Price:15000, Quantity:0, Img:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06745496.png',CateogryID:2},
    //   {ID:36,Name:'LG', Price:4000, Quantity:20, Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtzd3EPh6Odmt5B1Edc3JDRMClcgQaLxjBA&usqp=CAU',CateogryID:3},
    //   {ID:42,Name:'Toshipa', Price:45000, Quantity:7, Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGi6f77mMcrzUIJywjWEN-ND9hP6Xh4AaBTw&usqp=CAU',CateogryID:3},
    // ]
    //#endregion

  }

  ngOnChanges(): void {

    this.ProductbyCategory = this._productService.getProductsbyCatID(this.categoryID);
    // this.selectedCategory();
  }

  ngOnInit(): void {
  }

  Details(_productId : number) {
    this.route.navigate(['product',_productId])

  }


  DecreaseQ(id:IProduct, itemsCount:any)
  {
    this.cartList.Name = id.Name;
    this.cartList.Price = id.Price ;
    this.cartList.Count = itemsCount as number;
    // console.log(this.cartList.Count);

    var result = this.ProductbyCategory.find( product  => product.ID == id.ID);
    if (result != undefined && result.Quantity > 0 && itemsCount <= result.Quantity && itemsCount !=0)
    {
      // console.log(result?.Price);
      this.orderTotalPrice = result.Price as number * itemsCount;
      // console.log(this.orderTotalPrice);
      result.Quantity = result.Quantity - itemsCount
      this.productOutput.emit(this.cartList)
      console.log(this.cartList);

    };
    // const result2 = this.ProductList.find(({ Quantity }) => Quantity === q);
    // const result = this.ProductList.find(({ ID }) => ID === obj.ID);
    // console.log(result?.ID);
  }

  productTrackby(index: number, prd: IProduct) {
    return prd.ID;
  }

   ////////////////// day1 /////////////////////////
  // selected(event: any):any {
  //   if (this.Checked==0) {
  //     this.ProductbyCategory =Array.from (this.ProductbyCategory);
  //     this.ProductbyCategory =this.ProductbyCategory;
  //   }
  //   this.Checked = event.target.value;
  // }

  // selectedCategory() {
  //   if(this.categoryID==0)
  //   {
  //     this.ProductbyCategory = this.ProductList;
  //     return;
  //   }
  //   this.ProductbyCategory = this.ProductList.filter(product => product.CateogryID == this.categoryID);
  // }

  // calculate(){
  //   this.orderTotalPrice = this.cartList.reduce((total, item) => item.Price*item.count + total,0);
  // }

  switchImg() {
    this.Switch = !this.Switch;

  }

}
