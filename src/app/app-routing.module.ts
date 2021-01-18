import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { Routes, RouterModule } from '@angular/router';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

const routes: Routes =[
  {path: '', component:ProductlistComponent},
  {path: 'details', component: PhoneDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
