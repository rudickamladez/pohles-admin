import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tickets-action-bar',
  templateUrl: './tickets-action-bar.component.html'
})
export class TicketsActionBarComponent implements OnInit {
  faSearch = faSearch;
  scanPath = "/tickets/scan";

  constructor() { }

  ngOnInit(): void {
  }

}
