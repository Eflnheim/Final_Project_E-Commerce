import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getListProducts();
  }

  products: any[] = [];
  allProducts: any[] = [];
  swiper!: Swiper;
  query!: string;


  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
    });
  }
  getListProducts() {
    this.api.getListProducts().subscribe( (data:any) => {
      console.log(data['data']);
      this.allProducts = data['data'];
      this.products = [...this.allProducts];
    })
  }

  onSearchChange(event: any) {
    console.log(event.detail.value);

    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    this.products = [];
    if (this.query.length > 0) {
      this.searchItems();
    }else{
      this.products = [...this.allProducts];
    }
  }

  searchItems() {
    console.log('tess');
    this.products = this.allProducts.filter((product) =>
      product.product_name.toLowerCase().includes(this.query)
    );
  }

}
