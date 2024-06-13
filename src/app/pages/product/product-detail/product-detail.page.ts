import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }


  product: any;
  productId: number = 4;

  ngOnInit() {
    this.getProductById(this.productId);
  }

  getProductById(id: number) {
    this.api.getProductById(id).subscribe( (data:any) => {
      this.product = data['data'];
    })
  }

}
