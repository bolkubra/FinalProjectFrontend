import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm : FormGroup;
  constructor(private FormBuilder : FormBuilder){} // form oluşturma servisimiz

  ngOnInit(): void {
  }

  createProductAddFrom(){ // form kurallarını belirlediğimiz yer 
    this.productAddForm = this.FormBuilder.group({
      productName : ["",Validators.required],
      unitPrice : ["",Validators.required],
      unitsInStock : ["",Validators.required],
      categoryId : ["",Validators.required],
    })
  }

}
