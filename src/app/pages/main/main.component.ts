import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainPageComponentnt implements OnInit {

  constructor(
    httpSv: HttpService
  ) {
  }

  ngOnInit() {
 

  }

  ngOnDestroy() {
   }
}
