import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{


  products:Products[] = []
  //productResponseModel:ProductResponseModel={}

  ngOnInit(): void {
    console.log("init çalıştı");
  }
}
