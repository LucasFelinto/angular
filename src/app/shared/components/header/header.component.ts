import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  _number: number;
  constructor() {}

  get number() {
    return this._number;
  }

  ngOnInit(): void {}
  randomNumber() {
    this._number = Math.floor(Math.random() * 20);
    return this._number;
  }
}
