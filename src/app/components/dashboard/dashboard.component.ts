import { Component, OnInit } from "@angular/core";
import { faCoins, faTicket } from '@fortawesome/free-solid-svg-icons';
import { TimeService } from "src/app/services/time.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  faTicket = faTicket;
  faCoins = faCoins;
  public paidTickets = 4269;
  public reservedTickets = 34;
  public freeTickets = 56;
  public totalTickets = 78;

  constructor(
    private readonly timeService: TimeService
  ) {
  }

  ngOnInit(): void {
    this.timeService.getActiveSum().subscribe(
      (timeSum) => {
        this.paidTickets = timeSum.paid;
        this.reservedTickets = timeSum.reserved;
        this.freeTickets = timeSum.free;
        this.totalTickets = timeSum.total;
      }
    )
  }
}
