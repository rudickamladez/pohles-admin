import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-action-bar-customers',
  templateUrl: './action-bar-customers.component.html',
})
export class ActionBarCustomersComponent implements OnInit {

  constructor(
    private readonly customerService: CustomerService,
  ) { }

  public openForm() {
    console.log("openForm");
    this.customerService.register(
      {
        name: {
          first: '',
          last: '',
        },
        email: '',
      }
    );
  }

  ngOnInit(): void {
  }

}
