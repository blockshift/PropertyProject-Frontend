import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AllformClass } from '../forms/allforms';
import { HttpService } from '../../services/http/http.service';
import { TCModalService } from '../../ui/services/modal/modal.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  data:any;
  form: FormGroup;

  constructor(private formclass : AllformClass , private httpservice: HttpService,private modal:TCModalService) { }

  ngOnInit() {
  
	this.data=[
	 { 
  		value: "Male",
  		label: "Male",
        disabled: false
  	 },
  	 { 
  		value: "Female",
  		label: "Female",
  		disabled: false
  	 }
	];

	this.form=this.formclass.signupform();

}


	signup(){

	console.log(this.form);
	this.httpservice.signupservice(this.form.value)
		.subscribe(data=>{


			this.modal.open({
        		body: 'User created',
        		header: 'Success'
      });
		},
		error=>{
			this.modal.open({
        		body: 'User creation failed',
        		header: 'Error'
      		});
		})


	}






}
