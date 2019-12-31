import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  public serviceName  = '';
 
  constructor() { }


  add(a, b) {
    return a + b;
  }
}
