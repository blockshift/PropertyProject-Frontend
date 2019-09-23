import { Component, OnInit } from '@angular/core';
import { AllformClass } from '../../forms/allforms';
import { FormGroup } from '@angular/forms';
import { HttpService } from '../../../services/http/http.service';
import { TCModalService } from '../../../ui/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developerdashboard',
  templateUrl: './developerdashboard.component.html',
  styleUrls: ['./developerdashboard.component.scss']
})
export class DeveloperdashboardComponent implements OnInit {

	form: FormGroup;	
    getvendorform : FormGroup;
    vendordetailsarray :any=[];
    dataparse :any = [];
    showform: boolean = false;

  constructor(private formclass : AllformClass,private httpsv: HttpService,private modal: TCModalService,private router:Router) { }




  ngOnInit() {
  	this.form = this.formclass.vendordetails();
    this.httpsv.getvendordetails()
    	.subscribe(data=>{
    		
            

    		this.dataparse = data;
    		if(this.dataparse.length == 0)
            	this.showform = true;

    		console.log('Data received',this.dataparse.vendorobject);
    		this.vendordetailsarray = this.dataparse.vendorobject;
    		console.log(this.vendordetailsarray);

    	},
    	error=>{
    		this.showform = true;
    		console.log('Error received',error);
    	})
  }



  submit(){

  	console.log(this.form.value);
  	this.httpsv.addvendordetails(this.form.value)
  		.subscribe(data=>{
  			console.log(data);
  			this.modal.open({
  				body: ' Your details successfully added pending approval from admins.',
  				header: 'Successful'
  			})

  		},
  		error=>{
  			this.modal.open({
  				body: 'Admins have been notified.',
  				header: 'Internal error occured'
  			})
  		})
  }


  reset(){
  	this.form.reset();
  }


  remove(developerid){

  	console.log("developer id",developerid);

  	this.router.navigate(['/vertical/vendordetails',developerid]);


  }

}
