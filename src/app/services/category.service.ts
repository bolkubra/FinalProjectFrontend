import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatgeoryService {
  apiUrl = "https://localhost:44358/api/categories/getall";

  constructor(private htppClient:HttpClient) { }

  getCategories() : Observable <ListResponseModel<Category>> { // dönüş tipim observable ama veri tipim productResponseModel
    return this.htppClient.get<ListResponseModel<Category>>(this.apiUrl)
  }
}
