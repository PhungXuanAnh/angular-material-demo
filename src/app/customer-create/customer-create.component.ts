import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-customer-create',
  // templateUrl: './customer-create.component.html',
  template: require('./customer-create.component.html'),
  // styleUrls: ['./customer-create.component.css']
  styles: [require('./customer-create.component.css')]
})
export class CustomerCreateComponent implements OnInit {
  name = '';
  email = '';
  job = '';
  address = '';
  selectedSource = 'email';
  selectedGender = 'male';
  isCompany = false;
  createdAt = new FormControl(new Date());

  constructor() { }
  public createCustomer() {

  }
  ngOnInit() {
  }

}
