/*
Name : Sanket Vagadiya
Id : 300991500
Date March 30, 2019
*/import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route)
  }

  ngOnInit() {
  }

}
