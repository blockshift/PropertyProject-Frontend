import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-proeprty-details',
  templateUrl: './proeprty-details.component.html',
  styleUrls: ['./proeprty-details.component.scss']
})
export class ProeprtyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

 

  ngOnInit() {
  
  	let id = this.route.snapshot.paramMap.get('id');
  	console.log("id received",id);
  }



}
