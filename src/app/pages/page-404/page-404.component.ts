import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';


@Component({
  selector: 'page-404',
  templateUrl: './page-404.component.html',
  styleUrls: ['./page-404.component.scss']
})
export class Page404Component implements OnInit{
  constructor(
    httpSv: HttpService
  ) {

  }

  ngOnInit() {

  }

}
