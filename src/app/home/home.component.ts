import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public stateValue: string = 'state value';
  public stateValuea: string  = null;
  public toBeLessThanValue: number  = 1.5;
  public toBeGreaterThanValue: number  = 1.5;
  public toBeLessThanOrEqual: number  = 1.5;
  public toBeGreaterThanOrEqual: number  = 15;
  public toBeNaN = 0 / 0;

  welcome: string;
  isLoggedIn = 'a';
  circumference;
  isLoggedInArrary = ['a'];

  constructor() { 
    // this.arrayList();
  }

  ngOnInit() {
    this.welcome = this.isLoggedIn;
  }

  name(name) {
    return 'Welcome ' + name + '!';
  }

  arrayList() {

   console.log('%cHome component', 'background: green;')

    return ['first name','last name', 'middle name'];
  }

  // circle() {
  //   this.circumference = function(r) {
  //     return 2*Math.PI*r;
  //   }
  // };

}
