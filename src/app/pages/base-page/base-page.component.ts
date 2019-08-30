import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';


@Component({
  selector: 'base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit{


  constructor(
    public httpSv: HttpService
  ) { }

  ngOnInit() {
   
  }



}
