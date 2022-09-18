import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    animateOut: 'fadeOut',
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<<', '>>'],
    nav: true,
    autoplay: true,
    items: 1
  }

  constructor() { }

  ngOnInit(): void {
    $('.carousel').carousel({
      interval: false,
    });
  }

}
