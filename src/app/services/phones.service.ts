import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import itemData from '../../assets/phones/phones.json';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  items = itemData;
  details;

  constructor(private http: HttpClient) { }

  getPhones() {
    return this.items;
  }

  getPhone(phoneId:string) {
     return this.items.find(p=> p.id === phoneId );
  }

  getDetails(phoneId:string): Observable<any> {
    let source="./assets/phones/"+phoneId+".json";
    return this.http.get(source);
  }

  }



