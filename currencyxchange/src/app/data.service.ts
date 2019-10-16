import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: any;

  constructor(private http: Http) { }


getPrices() {
  return this.http.get('https://www.mycurrency.net/US.json')
  .map(result => this.result = result.json());
}



}
