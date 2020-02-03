import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'home-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  flipped = false;

  constructor() { }

  ngOnInit() {
  }

  public flip() {
    $('.card').toggleClass('flipped');
  }

}
