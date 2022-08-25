import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-action-bar-customers',
  templateUrl: './action-bar-customers.component.html',
})
export class ActionBarCustomersComponent implements OnInit {
  faCoffee = faCoffee;

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
