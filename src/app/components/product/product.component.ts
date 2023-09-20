import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{


  products:Products[] = []
  dataLoaded = false;
  filterText = "";
 
  /*productResponseModel:ProductResponseModel={ // meplemek istediğimiz datanın kendisi
    data:this.products,
    message:"",
    success:true
  }*/
  constructor(private productService:ProductService, // amacı productcomponent için bellekte yer tutmaktır.
  private activedRoute : ActivatedRoute,
  private toastrService : ToastrService,
  private cartService : CartService){} 

  ngOnInit(): void {
   this.activedRoute.params.subscribe(params=>{
    if(params["categoryId"]){
      this.getProductsByCategory(params["categoryId"])
    }
    else{
       this.getProducts()
    }
   })
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

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  }

  addToCart(product:Products){
   this.toastrService.success("Sepete Eklendi", product.productName)
   this.cartService.addToCart(product); // sepete ürün ekleme
  }
}
