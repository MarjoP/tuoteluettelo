import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
//  product ={
//  "name":"",
//  "age":null,
//  "id":null,
//  "imageUrl":"",
//  "snippet":""
// }
  constructor() { }

  @Input() product;

  ngOnInit(): void {
  }

}
