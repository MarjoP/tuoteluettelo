import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonesService } from '../services/phones.service';
import { faCheck, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  faCheck = faCheck;
  faTimes = faTimes;
  faArrowLeft = faArrowLeft;

  phoneId;
  phone:{
    age:number,
    id:number,
    imageUrl:string,
    snippet:string,
    name:string
  };
  phoneDetails;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private phoneService:PhonesService,
    private _location: Location
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.phoneId = params['prod'];

      this.phone=this.phoneService.getPhone(this.phoneId);

      this.phoneDetails = this.phoneService.getDetails(this.phoneId).subscribe(data => {
             this.phoneDetails=data as string[];
              console.log(this.phoneDetails);
      });

    })
  }

  goBack() {
    this._location.back();
  }

  changeImage(imageSource:string) {

    this.phone.imageUrl=imageSource;

  }
}
