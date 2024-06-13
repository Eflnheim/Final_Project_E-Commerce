import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getListProducts();
  }

  listProducts: any

  getListProducts() {
    this.api.getListProducts().subscribe( (data:any) => {
      this.listProducts = data['data'];
    })
  }

}
