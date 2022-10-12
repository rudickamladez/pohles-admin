import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { faHourglass, faHourglassStart, faMoneyBillTrendUp, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { NgxScannerQrcodeComponent } from 'ngx-qrcode-updated';
import { ToastrService } from 'ngx-toastr';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/types/ticket';
const DEFAULT_OUTPUT_STRING = "Scan some QR code please.";
@Component({
  selector: 'app-tickets-scan',
  templateUrl: './tickets-scan.component.html'
})
export class TicketsScanComponent implements OnInit {
  public output: string = DEFAULT_OUTPUT_STRING;
  public ticket?: Ticket;
  public canPay: boolean = false;
  public faMoneyBillTrendUp = faMoneyBillTrendUp;
  public faPlay = faPlay;
  public faStop = faStop;
  public faHourglass = faHourglassStart;


  @ViewChild("action")
  public action!: NgxScannerQrcodeComponent;

  constructor(
    private readonly ticketsService: TicketsService,
    private readonly toastr: ToastrService
  ) {
  }

  public pay() {
    if (!this.ticket || !this.ticket.id) {
      return;
    }
    this.ticketsService.pay(this.ticket.id).subscribe(
      (ticket) => {
        console.log("paid:", ticket);
      }
    )
  }

  public toggleCamera() {
    this.ticket = undefined;
    this.action.toggleCamera();
    let event = this.action.event;
    if(event.observers.length == 0 && (this.action.isStart || this.action.isLoading)) {
      event.subscribe(
        //This lambda is called on event.
        (data) => {
          if (data == null) {
            return;
          }
          this.output = data;
          const dataList = data.split('/');
          const id = dataList[4];
          this.action.toggleCamera();
          this.ticketsService.getById(id).subscribe((
            (ticket) => {
              if (!ticket) {
                this.toastr.error(
                  `<span class="tim-icons icon-trash-simple" [data-notify]="icon"></span> <b>Ticket DIDN'T paid!</b> Can't pay! Ticket doesn't exist.`,
                  '',
                  {
                    disableTimeOut: true,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-error alert-with-icon",
                    positionClass: 'toast-top-right',
                  }
                );
              }
              this.ticket = ticket;
              this.canPay = true;
            }
          ));
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
