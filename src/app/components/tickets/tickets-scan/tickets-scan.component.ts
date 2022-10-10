import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-qrcode-updated';
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
  public processOutput(action: NgxScannerQrcodeComponent) {
    this.output = action.data;
  }

  public onError(e: any): void {
    alert(e);
  }

}
