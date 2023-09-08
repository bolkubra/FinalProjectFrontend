import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListResponseModel } from '../models/ListResponseModel';
import { Products } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44358/api/products/getall";

  constructor(private htppClient:HttpClient) { }

  getProducts() : Observable <ListResponseModel<Products>> { // dönüş tipim observable ama veri tipim productResponseModel
    return this.htppClient.get<ListResponseModel<Products>>(this.apiUrl)
  }
}
