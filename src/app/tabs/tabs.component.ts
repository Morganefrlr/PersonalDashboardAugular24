import { Component, OnInit } from '@angular/core';
import { Tab, tabsConfig } from './tabsConfig';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit{
  
  tabList: Tab[]

  ngOnInit() {
    this.tabList = tabsConfig
  }
}
