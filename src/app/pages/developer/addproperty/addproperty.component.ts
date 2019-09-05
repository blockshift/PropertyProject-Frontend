import { Component, OnInit } from '@angular/core';
import { AllformClass } from '../../forms/allforms';
import { FormGroup } from '@angular/forms';
import { propertystatus } from '../../../interfaces/patient';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {


  form : FormGroup;
  data : propertystatus[]=[

  {
  	value: "live",
  	label: "Live",
  	disabled : false

  },
  {

  	value: "commingsoon",
  	label: "Coming Soon",
  	disabled: false

  }

  ]
  constructor(private addpropertyform:AllformClass) { }

  ngOnInit() {

  	this.form = this.addpropertyform.addpropertyform();

  }


 addproperty(){


 	
 }

 resetform(){
 	this.form.reset();
 }




}
