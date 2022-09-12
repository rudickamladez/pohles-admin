import { Component, OnInit } from "@angular/core";
import { faTicket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  faTicket = faTicket;

  constructor() {
  }

  ngOnInit(): void {
  }
}
