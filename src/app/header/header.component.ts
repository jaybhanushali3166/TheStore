import { Component, OnInit } from '@angular/core';
import {tabs }from '../../assets/static/tabs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Tabs=tabs;
  // tab:string;
  constructor() { }

  // onTabSelect(event){
  //   console.log("click tab:",event);
  //   this.tab=event;
  // }


  ngOnInit() {
  }

}
