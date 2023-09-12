import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CatgeoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categories : Category[]=[];
  currentCategory : Category;
  constructor (private CategoryService : CatgeoryService) {}

  ngOnInit (): void {
    this.getCategories();
  }

  getCategories(){

    this.CategoryService.getCategories().subscribe(response=>{
      this.categories=response.data
      
    })
  }

  setCurrentCategory(category:Category){
    this.currentCategory=category;  
  }
  getCurrentCategoryCalss(categories:Category){
    if(categories==this.currentCategory)
    {
      return "list-group-item active"
    }
    else
    return "list-group-item "

  }

}
