import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/types/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { SocketService } from 'src/app/socketio/socket.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {

  public customers: Customer[] = [];

  constructor(
    private readonly customerService: CustomerService,
    private readonly socketService: SocketService,
  ) {
    this.socketService.on(
      "new-customer",
      (customer: Customer) => {
        this.customers.push(customer);
        this.sort();
      }
    );

    this.socketService.on(
      "delete-team",
      (customer: Customer) => {
        let found = this.customers.filter(value => value.id === customer.id);
        if (found[0]) {
          this.delete(found[0]);
        }
      }
    );
  }

  private delete(
    customer: Customer,
  ) {
    this.customers.splice(this.customers.indexOf(customer, 1));
  }

  private sort() {
    this.customers.sort(function (a, b) {
      var textA = a.name.last.toUpperCase();
      var textB = b.name.last.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(
      (customers) => {
        this.customers = customers;
        this.sort();
      }
    )
  }

}
