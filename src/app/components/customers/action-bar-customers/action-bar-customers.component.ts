import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-action-bar-customers',
  templateUrl: './action-bar-customers.component.html',
})
export class ActionBarCustomersComponent implements OnInit {
  faPlus = faPlus;

  constructor(
    private readonly customerService: CustomerService,
  ) { }

  public openForm() {
    console.log("openForm");
    this.customerService.register(
      {
        name: {
          first: 'kresni jmeno',
          last: 'prijmeni',
        },
        email: 'email',
      }
    );
  }

  ngOnInit(): void {
  }

}
