import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{


  products:Products[] = []
  dataLoaded = false;
 
  /*productResponseModel:ProductResponseModel={ // meplemek istediğimiz datanın kendisi
    data:this.products,
    message:"",
    success:true
  }*/
  constructor(private productService:ProductService){} // amacı productcomponent için bellekte yer tutmaktır.

  ngOnInit(): void {
    this.getProducts();
  }

  
  //JavaScript
  getProducts(){
    /*this.htppClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{
      //genel kuralları buraya yazarız 
      this.products=response.data
      }) ; // <> gelen datayı responsemodele göre mep edeceksin demek
    }*/

    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  }
}
