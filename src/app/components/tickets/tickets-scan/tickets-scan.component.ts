import { Component, OnInit } from '@angular/core';
const DEFAULT_OUTPUT_STRING = "Scan some QR code please.";
@Component({
  selector: 'app-tickets-scan',
  templateUrl: './tickets-scan.component.html'
})
export class TicketsScanComponent implements OnInit {
  public output: string = DEFAULT_OUTPUT_STRING;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  /**
   * processOutput
   */
  public processOutput(data: string) {
    if (data === null) {
      this.output = DEFAULT_OUTPUT_STRING;
      return;
    }
    console.log(data);
    this.output = data;
  }

  public onError(e: any): void {
    alert(e);
  }

}
