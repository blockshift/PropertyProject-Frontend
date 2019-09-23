import { Component, OnInit } from '@angular/core';
import { IOption } from '../../interfaces/patient';
import { AllformClass } from '../forms/allforms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';

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
  
  constructor(private formclass : AllformClass,private router:Router,private httpsv: HttpService,private modal: TCModalService) {
 }

  ngOnInit() {
  	this.form = this.formclass.getloginform();
  }




  login(){


   
   this.httpsv.loginservice(this.form.value)
   	.subscribe(data=>{
   		console.log(data);
   		var dataparse = data;
   		
   		this.router.navigate(['vertical/investor']);	
   	},
   	error=>{
   		this.modal.open({
   			body: 'Username or password is incorrect',
   			header: 'Login Error'
   		})

   	})



  }

}
