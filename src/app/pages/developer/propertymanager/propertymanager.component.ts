import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-propertymanager',
  templateUrl: './propertymanager.component.html',
  styleUrls: ['./propertymanager.component.scss']
})
export class PropertymanagerComponent implements OnInit {

 property=[];	

  constructor() { }

  ngOnInit() {
  
  	this.property = [
      {
        propertyinfo: {
          propertyDetails: {
            propertyName: 'Mall',
            propertylocation: 'Dubai'
            
          },
          developerInformation:{
            
            companyAddress:'Karachi',
            companyName:'Test Company',
            phoneNumber: '03132424242',
            website: 'abc.com',
            email: 'abc@gmail.com'
          },
          buyinginfo:{
            propertystatus: 'active',
            requiredfunding: '10,000,000',
            holdingperiod: '5 years'
          }

        },
        administratorstatus: "Approved"
      },

      {
        propertyinfo: {
          propertyDetails: {
            propertyName: 'Islamabad Mall',
            propertylocation: 'Islamabad'
            
          },
          developerInformation:{
            
            companyAddress:'Bahria Town',
            companyName:'Daqid Pvt',
            phoneNumber: '12345678',
            website: 'abc.com',
            email: 'abc@gmail.com'
          },
          buyinginfo:{
            propertystatus: 'active',
            requiredfunding: '200,000,000',
            holdingperiod: '10 years'
          }

        },
        administratorstatus: "pending"
      },


    ]

  }

  


}


    