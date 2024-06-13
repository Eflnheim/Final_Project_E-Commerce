import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getId();
    this.getProduct(this.productId);
  }

  id!: any;
  productId: any;
  product!: any;

  getId() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productId = this.id;
    console.log("check id", this.id);
  }

  getProduct(productId: any) {
    this.api.getProductById(productId).subscribe( (data:any) => {

      this.product = data['data'];
      console.log(this.product);
    })

  }



}
