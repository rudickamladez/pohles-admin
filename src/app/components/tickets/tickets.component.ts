import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SocketService } from 'src/app/socketio/socket.service';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/types/ticket';
import { faEye, faTrash, faEnvelope, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent implements OnDestroy, OnInit {
  public loadingState = 1;
  public faEye = faEye;
  public faTrash = faTrash;
  public faEnvelope = faEnvelope;
  public faMoneyBill = faMoneyBill;
  public tickets: Ticket[] = [];
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private readonly ticketsService: TicketsService,
    private readonly socketService: SocketService,
    private readonly toastr: ToastrService
  ) {
    this.socketService.on("new-ticket", (ticket: Ticket) => {
      this.loadingState++;
      this.tickets.push(ticket);
      this.loadingState--;
    });

    this.socketService.on("update-ticket", (ticket: Ticket) => {
      this.loadingState++;
      this.updateTicketInTickets(ticket);
      this.loadingState--;
    });

    this.socketService.on("delete-ticket", (ticket: Ticket) => {
      this.loadingState++;
      let found = this.tickets.filter(value => value.id === ticket.id);
      if(found[0]){
        this.delete(ticket);
      }
      this.loadingState--;
    });
  }

  public updateTicketInTickets(ticket: Ticket) {
    let found = this.tickets.filter(value => value.id === ticket.id);
      if(found[0]){
        let index = this.tickets.indexOf(found[0]);
        this.tickets[index] = ticket;
      }
  }

  public toHtml(ticket: Ticket) {
    return `ID: ${ ticket.id }<br>
    Time: ${ ticket.time.name }<br>
    Firstname: ${ ticket.name.first }<br>
    Lastname: ${ ticket.name.last }<br>
    E-mail: ${ ticket.email }<br>
    Status: ${ ticket.status }<br>
    Date: ${ ticket.date }`;
  }

  public getDetailSwalOptions(ticket: Ticket): SweetAlertOptions {
    return {
      titleText: "Ticket detail",
      html: this.toHtml(ticket),
      icon: "info",
    };
  }

  public getDeleteSwalOptions(ticket: Ticket): SweetAlertOptions {
    return {
      titleText: "Do you want delete this ticket?",
      html: this.toHtml(ticket),
      icon: "warning",
      showCancelButton: true,
      focusCancel: true,
    };
  }

  public getMailAgainSwalOptions(ticket: Ticket): SweetAlertOptions {
    return {
      titleText: "Do you want to send e-mail again?",
      html: this.toHtml(ticket),
      icon: "question",
      showCancelButton: true,
      focusCancel: true,
    };
  }

  public getPaySwalOptions(ticket: Ticket): SweetAlertOptions {
    return {
      titleText: "Do you want pay this ticket?",
      html: this.toHtml(ticket),
      icon: "question",
      showCancelButton: true,
      focusCancel: true,
    };
  }

  public async sendMailAgain(ticket: Ticket) {
    if (!ticket.id) {
      this.toastr.error(
        `<span class="tim-icons icon-email-85" [data-notify]="icon"></span> <b>Mail</b> Can't send! Didn't receive ticket id.`,
        '',
        {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-error alert-with-icon",
          positionClass: 'toast-top-right',
        }
      );
      return;
    }
    this.ticketsService.mailAgain(ticket.id).subscribe(
      (response) => {
        this.toastr.info(
          `<span class="tim-icons icon-email-85" [data-notify]="icon"></span> <b>Mail response</b> <br/>${JSON.stringify(response)}!`,
          '',
          {
            disableTimeOut: true,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: 'toast-top-right',
          }
        );
      }
    );
  }

  public pay(ticket: Ticket) {
    if (!ticket.id) {
      this.toastr.error(
        `<span class="tim-icons icon-trash-simple" [data-notify]="icon"></span> <b>Ticket DIDN'T paid!</b> Can't pay! Didn't receive ticket id.`,
        '',
        {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-error alert-with-icon",
          positionClass: 'toast-top-right',
        }
      );
      return;
    }
    this.ticketsService.pay(ticket.id).subscribe(
      (ticket) => {
        this.updateTicketInTickets(ticket);
      }
    )
  }

  public delete(ticket: Ticket) {
    if (!ticket.id) {
      this.toastr.error(
        `<span class="tim-icons icon-trash-simple" [data-notify]="icon"></span> <b>Ticket DIDN'T deleted!</b> Can't delete! Didn't receive ticket id.`,
        '',
        {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-error alert-with-icon",
          positionClass: 'toast-top-right',
        }
      );
      return;
    }
    this.tickets.splice(this.tickets.indexOf(ticket), 1);
    this.ticketsService.delete(ticket.id).subscribe(
      (ticket) => {
        this.toastr.info(
          `<span class="tim-icons icon-trash-simple" [data-notify]="icon"></span> <b>Ticket deleted</b>`,
          '',
          {
            disableTimeOut: true,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: 'toast-top-right',
          }
        );
      }
    )
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
        this.dtTrigger.next(null);
        this.loadingState--;
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
