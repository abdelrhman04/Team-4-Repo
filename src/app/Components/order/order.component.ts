import { CartOrders } from './../../Models/CartOrders';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  CategoryList: ICategory[];
  selectedCattegory: number = 0;
  cart: any[] =[];
  dateField: Date;
  totalPrice: number = 0;

  constructor() {

    this.CategoryList = [
      { ID: 1, Name: "Mobile" },
      { ID:2,Name:"Labtop"},
      { ID:3,Name:"Tv"}

    ]

    this.dateField = new Date();
  }



  orderCartResult(cart: any)
  {
    this.cart.push(new CartOrders (cart.Name, cart.Price, cart.Count));
  }

  delete(item:any){
    this.cart.splice(this.cart.findIndex(e => e.ID === item.ID));
    item.Quantity = item.Quantity + item.count as number;

  }

  // calculate(){
  //   this.totalPrice = this.cart.reduce((total, item) => +item.Price * item.count + total,0);
  //   console.log(this.totalPrice);
  // }





  ngOnInit(): void {
  }


}
