import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/types/customer';

@Component({
  selector: 'app-form-create-customers',
  templateUrl: './form-create-customers.component.html',
})
export class FormCreateCustomersComponent implements OnInit {

  public customer: Customer;
  // public form?

  constructor() { }

  ngOnInit(): void {
  }

}
