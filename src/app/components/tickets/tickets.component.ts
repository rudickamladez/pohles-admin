import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SocketService } from 'src/app/socketio/socket.service';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/types/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent implements OnDestroy, OnInit {
  public tickets: Ticket[] = [];
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private readonly ticketsService: TicketsService,
    private readonly socketService: SocketService
  ) {
    this.socketService.on("new-ticket", (ticket: Ticket) => {
      this.tickets.push(ticket);
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });

    this.socketService.on("update-ticket", (ticket: Ticket) => {
      console.log("Update je tu");
      let found = this.tickets.filter(value => value.id === ticket.id);
      if(found[0]){
        this.update(found[0], ticket);
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      }
    });

    this.socketService.on("delete-ticket", (ticket: Ticket) => {
      let found = this.tickets.filter(value => value.id === ticket.id);
      if(found[0]){
        this.delete(ticket);
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      }
    });
  }


  private delete(ticket: Ticket){
    this.tickets.splice(this.tickets.indexOf(ticket), 1);
  }

  private update(old: Ticket, update: Ticket) {
    // TODO
    old = update;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
    };

    this.ticketsService.get().subscribe(
      (tickets) => {
        this.tickets = tickets;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      }
    );

    this.ticketsService.deleteAsObservable().subscribe(
      (ticket) => {
        this.tickets.splice(this.tickets.indexOf(ticket), 1);
      }
    );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}