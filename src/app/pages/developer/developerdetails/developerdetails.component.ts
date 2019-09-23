import { Component, OnInit } from '@angular/core';
import { AllformClass } from '../../forms/allforms';
import { FormGroup } from '@angular/forms';
import { HttpService } from '../../../services/http/http.service';
import { TCModalService } from '../../../ui/services/modal/modal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-developerdetails',
  templateUrl: './developerdetails.component.html',
  styleUrls: ['./developerdetails.component.scss']
})
export class DeveloperdetailsComponent implements OnInit {


  form : FormGroup;

  constructor(private httpsv: HttpService,private modal:TCModalService,private formclass: AllformClass,private route:ActivatedRoute) { }

  ngOnInit() {
  	this.form = this.formclass.vendordetails();


  	this.route.paramMap.subscribe(params=>{
  		console.log(params);
  	});
  	
  }

}
