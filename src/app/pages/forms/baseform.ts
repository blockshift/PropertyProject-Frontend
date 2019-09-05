import { FormBuilder,FormGroup } from '@angular/forms';
import { SuperForm } from "angular-super-validator";



  export class Baseformclass {
  	
  	protected form : FormGroup;

  	constructor(protected fb:FormBuilder) {

	}



	getallerrorvalidation(){
		const errors = SuperForm.getAllErrors(this.form);
 		console.log(errors);
	}

  }