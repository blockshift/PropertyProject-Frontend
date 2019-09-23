import  { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Baseformclass } from './baseform';



@Injectable({
  providedIn: 'root',
})
export class AllformClass extends Baseformclass {

   protected form : FormGroup;

 	constructor(protected fb: FormBuilder){
 		super(fb);
 	}

 	getloginform(){

 		return this.fb.group({
 			email: ['', Validators.required],
 			password: ['', Validators.required]
 		});

 	}


 	signupform(){

 		return this.fb.group({
 			firstname: ['',Validators.required],
 			lastname: ['', Validators.required],
 			gender: ['', Validators.required],
 			dateofbirth: ['', Validators.required],
 			resedentialaddress: ['', Validators.required],
 			emailaddress: ['', Validators.required],
 			userpassword: ['', Validators.required],
 			mobilenumber: ['', Validators.required],
 			permanentaddress: ['', Validators.required]

 		});
 	}


 	vendordetails(){
 		return this.fb.group({
 			vendorname: ['',Validators.required],
			developerdetails: ['', Validators.required],
			mobilenumber: ['', Validators.required],
			websiteurl: [''],
			userid: ['', Validators.required]	
 		})
 	}

 	addpropertyform(){

 		return this.fb.group({
 			propertytitle: ['', Validators.required],
 			propertydescription: ['', Validators.required],
 			propertylocation: ['', Validators.required],
 			propertystatus: ['', Validators.required],
 			telephonenumber: ['', Validators.required],
 			requiredfunding: ['', Validators.required],
 			acquiredfunding: [''],
 			holdingperiod: ['', Validators.required],
 			investors: ['']
 		})
 	}


 	getvendordetails(){
 		return this.fb.group({
 			userid: ['1', Validators.required]
 		})
 	}


}

