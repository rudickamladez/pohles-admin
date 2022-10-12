import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-qrcode-updated';
const DEFAULT_OUTPUT_STRING = "Scan some QR code please.";
@Component({
  selector: 'app-tickets-scan',
  templateUrl: './tickets-scan.component.html'
})
export class TicketsScanComponent implements OnInit {
  public output: string = DEFAULT_OUTPUT_STRING;
  public reservation = {
    name: {
      first: "Franta",
      last: "Dobrota",
    },
    email: "franta@lukasmatuska.cz",
    time: {
      name: "69:69",
    },
    status: "unpaid",
  };

  @ViewChild("action")
  public action!: NgxScannerQrcodeComponent;

  constructor() {
    
  }

  public toggleCamera() {
    this.action.toggleCamera();
    let event = this.action.event;
    if(event.observers.length == 0 && (this.action.isStart || this.action.isLoading)) {
      event.subscribe(
        //This lambda is called on event.
        (data) => {
          this.output = data;
        }
      );
    }
  }

  ngOnInit(): void {
    
  }

  public onError(e: any): void {
    alert(e);
  }

}
