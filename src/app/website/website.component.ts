import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
})
export class WebsiteComponent implements OnInit {
  year = new Date().getFullYear() as number;
  menu = false;
  constructor() {}

  ngOnInit(): void {}
  showMenu() {
    this.menu = true;
  }
  hideMenu() {
    this.menu = false;
  }
}
