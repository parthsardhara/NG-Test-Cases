import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public stateValue: string = 'state value';
  welcome: string;
  isLoggedIn = '';
  circumference;
  isLoggedInArrary = ['a'];

  constructor() { 
    // this.arrayList();
  }

  ngOnInit() {
    this.welcome = this.isLoggedIn ?
    'Welcome, ' + this.isLoggedIn : 'Please log in.';
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
