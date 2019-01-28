import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isCollapsed = false;
  isReverseArrow = false;
  width = 200;

  constructor() { }

  ngOnInit() {
  }

}
