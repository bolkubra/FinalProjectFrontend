import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Products } from '../models/product';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44358/api/";

  constructor(private htppClient:HttpClient) { }

  getProducts() : Observable <ListResponseModel<Products>> { // dönüş tipim observable ama veri tipim productResponseModel
    let newPath = this.apiUrl + "products/getall"
    return this.htppClient.get<ListResponseModel<Products>>(newPath)
  }

  getProductsByCategory(categoryId:number) : Observable <ListResponseModel<Products>> { 
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.htppClient.get<ListResponseModel<Products>>(newPath)
  }
}
