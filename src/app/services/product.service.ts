import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44358/api/products/getall";

  constructor(private htppClient:HttpClient) { }

  getProducts() : Observable <ProductResponseModel> { // dönüş tipim observable ama veri tipim productResponseModel
    return this.htppClient.get<ProductResponseModel>(this.apiUrl)
  }
}
