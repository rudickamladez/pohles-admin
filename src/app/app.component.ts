import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { SocketService } from './socketio/socket.service';
import { Customer } from "./types/customer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "PohLes Admin";

  public constructor(
    private readonly wss: SocketService,
    private readonly toastr: ToastrService,
  ) {

    this.wss.on(
      "new-customer",
      (customer: Customer) => {
        this.toastr.info(
          `<span class="tim-icons icon-badge" [data-notify]="icon"></span> <b>New customer!</b> ${customer.name.first} ${customer.name.last}`,
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
