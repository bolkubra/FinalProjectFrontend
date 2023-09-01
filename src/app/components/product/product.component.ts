import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{


  products:Products[] = []
  apiUrl = "https://localhost:44358/api/products/getall";
  /*productResponseModel:ProductResponseModel={ // meplemek istediğimiz datanın kendisi
    data:this.products,
    message:"",
    success:true
  }*/
  constructor(private htppClient:HttpClient){} // amacı productcomponent için bellekte yer tutmaktır.
  ngOnInit(): void {
    this.getProducts();
  }

  //JavaScript
  getProducts(){
    this.htppClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{

      this.products=response.data
    }) ; // <> gelen datayı responsemodele göre mep edeceksin demek
  }
}
