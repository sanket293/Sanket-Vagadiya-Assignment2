/*
Name : Sanket Vagadiya
Id : 300991500
Date March 30, 2019
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { super(route);}


  ngOnInit() {
  }

}
