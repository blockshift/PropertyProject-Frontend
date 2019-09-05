import { Component, OnInit } from '@angular/core';
import { IOption } from '../../interfaces/patient';
import { AllformClass } from '../forms/allforms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  data : IOption[] = [

	{
		value: 'Investor',
		label: 'Investor',
		disabled : false
	},

	{
		value: 'Developer',
		label: 'Developer',
		disabled : false
	}



  ]


   form: FormGroup;

  	constructor(private formclass : AllformClass,private router:Router) {




   }

  ngOnInit() {
  
  	this.form = this.formclass.getloginform();

  }




  login(){


   console.log("Form values", this.form.value);
	   if (this.form.value.role == 'Investor')
		   {	
		   	this.router.navigateByUrl('/vertical/investor');

		   }

	   else if (this.form.value.role == 'Builder')
		   {
		   	this.router.navigateByUrl('/vertical/developer');
		   }

  }

}
