import { Component, OnInit } from '@angular/core';

import { PhonesService } from '../services/phones.service';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  items;
  searched="";
  sortBy='age';

  constructor(private phoneService:PhonesService) { }

  ngOnInit(): void {
    this.items = this.phoneService.getPhones();
  }

  filterItem(filterVal:any){
    this.sortBy=filterVal;
  }
}
