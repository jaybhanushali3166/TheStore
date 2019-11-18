import { Component, OnInit } from '@angular/core';
import {tabs }from '../../assets/static/tabs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Tabs=tabs;
  tab:string;
  constructor() { }

  ngOnInit() {
  }
  onTabSelect(event){
    console.log("click tab:",event);
    this.tab=event;
  }

}
