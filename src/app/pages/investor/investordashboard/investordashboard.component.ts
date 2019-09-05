import { Component, OnInit } from '@angular/core';
import { IProperty } from '../../../ui/interfaces/property-data';
@Component({
  selector: 'app-investordashboard',
  templateUrl: './investordashboard.component.html',
  styleUrls: ['./investordashboard.component.scss']
})
export class InvestordashboardComponent implements OnInit {

  constructor() { }



  propertydata:IProperty[]=[
  {
  	"id": 1,
    "coverimg": "assets/content/property-content1.jpg",
    "propertyname": "Property 1",
    "location": "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    "Numberofunits": "200",
    "status": "active",
    "fundinggoal": "128,000,000"
  },
  {
  	"id": 2,
    "coverimg": "assets/content/property-content2.jpg",
    "propertyname": "Property 2",
    "location": "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    "Numberofunits": "200",
    "status": "active",
    "fundinggoal": "128,000,000"
  },
  {
  	"id": 3,
    "coverimg": "assets/content/property-content3.jpeg",
    "propertyname": "Property 3",
    "location": "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    "Numberofunits": "200",
    "status": "active",
    "fundinggoal": "128,000,000"
  },
  {
  	"id": 4,
    "coverimg": "assets/content/property-content4.jpg",
    "propertyname": "Property 4",
    "location": "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    "Numberofunits": "200",
    "status": "active",
    "fundinggoal": "128,000,000"
  },
  {
  	"id": 5,
    "coverimg": "assets/content/property-content2.jpg",
    "propertyname": "Property 5",
    "location": "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    "Numberofunits": "200",
    "status": "active",
    "fundinggoal": "128,000,000"
  },
  {
  	"id": 6,
    "coverimg": "assets/content/property-content1.jpg",
    "propertyname": "Property 6",
    "location": "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107",
    "Numberofunits": "200",
    "status": "active",
    "fundinggoal": "128,000,000"
  }
]


  


  ngOnInit() {
  }

}
