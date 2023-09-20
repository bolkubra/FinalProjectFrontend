import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // apiye istekte bulunabilmek için bu modülün olması gerekiyor
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [ // bizim yazdığımız componentler buraya ekleniyor
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterpipePipe,
    CartSummaryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // dışardan gelen modülleri importa koyuyoruz
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ // bir obje 
      positionClass :"toast-bottom-right" // ekranın neresinde görüntülenecğini bildirir
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
