import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getListProducts() {
    return this.http.get<any>(environment.url_domain + "/api/products", {})
  } //

  public getProductById(id: number) {
    return this.http.get<any>(`${environment.url_domain}/api/products/${id}`, {});
  }
}
