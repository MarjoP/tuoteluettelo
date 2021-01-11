import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { SearchAndSortComponent } from './search-and-sort/search-and-sort.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    SearchAndSortComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
