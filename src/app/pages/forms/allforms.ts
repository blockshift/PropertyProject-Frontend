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
 			username: ['', Validators.required],
 			password: ['', Validators.required],
 			role: ['', Validators.required],
 		});

 	}



}

