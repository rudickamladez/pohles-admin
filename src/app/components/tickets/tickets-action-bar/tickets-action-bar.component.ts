import { Component, OnInit } from '@angular/core';
import { faSearch, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tickets-action-bar',
  templateUrl: './tickets-action-bar.component.html'
})
export class TicketsActionBarComponent implements OnInit {
  faSearch = faSearch;
  faList = faList;
  scanPath: string = '/tickets/scan';
  ticketsPath: string = '/tickets';

  constructor() { }

  ngOnInit(): void {
  }

}
