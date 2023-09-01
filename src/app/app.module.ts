import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // apiye istekte bulunabilmek için bu modülün olması gerekiyor
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [ // bizim yazdığımız componentler buraya ekleniyor
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // dışardan gelen modülleri importa koyuyoruz
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
