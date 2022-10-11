import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth/auth.service';
import { SocketService } from './socketio/socket.service';
import { Ticket } from './types/ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "PohLes Admin";

  public constructor(
    private readonly wss: SocketService,
    private readonly toastr: ToastrService,
    private readonly authService: AuthService
  ) {
    this.authService.init();

    this.wss.on(
      "new-ticket",
      (ticket: Ticket) => {
        this.toastr.info(
          `<span class="tim-icons icon-money-coins" [data-notify]="icon"></span> <b>New ticket</b> at ${ticket.time.name}!`,
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



    this.wss.on(
      "paid-ticket",
      (ticket: Ticket) => {
        this.toastr.info(
          `<span class="tim-icons icon-coins" [data-notify]="icon"></span>
          <b>Paid ticket</b> at ${ticket.time.name}!
          by ${ticket.name.first} ${ticket.name.last}`,
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
}
