import { Component, OnInit } from '@angular/core';
import itemData from '../../assets/phones/phones.json';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  items: [] = itemData;
  constructor() { }

  ngOnInit(): void {
  }

}
