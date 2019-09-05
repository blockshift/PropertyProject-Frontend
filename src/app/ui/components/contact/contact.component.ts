import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { IProperty } from '../../interfaces/property-data';

@Component({
  selector: 'tc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class TCContactComponent implements OnInit {
	@HostBinding('class.tc-contact') true;

	@Input() data: IProperty;

  constructor() {}

  ngOnInit() {}
}
