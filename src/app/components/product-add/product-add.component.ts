import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Subscription , Observable } from 'rxjs';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm : FormGroup;
  constructor(private FormBuilder : FormBuilder, // form oluşturma servisimiz
    private productService : ProductService,
    private toastrService : ToastrService){} 

  ngOnInit(): void {
    this.createProductAddFrom();
  }

  createProductAddFrom(){ // form kurallarını belirlediğimiz yer 
    this.productAddForm = this.FormBuilder.group({
      productName : ["",Validators.required],
      unitPrice : ["",Validators.required],
      unitsInStock : ["",Validators.required],
      categoryId : ["",Validators.required],
    })
  }

  add(){

   /* if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })*/
      if(this.productAddForm.valid){
        let productModel = Object.assign({},this.productAddForm.value)
        this.productService.add(productModel).subscribe({
            next: (response) => { 
                this.toastrService.success(response.message,"Başarılı")
            },   
            error: (responseError) => { 
                if(responseError.error.Errors.length>0){
                    for (let i = 0; i <responseError.error.Errors.length; i++) {
                        this.toastrService.error(responseError.error.Errors[i].ErrorMessage
                        ,"Doğrulama hatası")
                    }       
                } 
            }   
        })
      
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  }
}
