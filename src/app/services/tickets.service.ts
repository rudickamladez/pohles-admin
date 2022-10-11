import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Ticket, TicketUpdate } from '../types/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private API_PATH: string = 'ticket';

  private ticketSource = new Subject<Ticket>();

  public asObservable() {
    return this.ticketSource.asObservable();
  }

  public register(ticket: Ticket) {
    this.ticketSource.next(ticket);
  }

  private deleteSource = new Subject<Ticket>();

  public deleteAsObservable() {
    return this.deleteSource.asObservable();
  }

  public ticketDelete(ticket: Ticket) {
    this.deleteSource.next(ticket);
  }

  constructor(private readonly httpClient: HttpClient) { }

  public get(): Observable<Ticket[]> {
    return this.httpClient.get(`${environment.backend.api}/${this.API_PATH}`).pipe(
      map(
        (res: any) => {
          return res.map(
            (result: any) => <Ticket>result
          );
        }
      )
    );
  }

  public mailAgain(
    id: string
  ): Observable<Object> {
    return this.httpClient.post(`${environment.backend.api}/${this.API_PATH}/mail/${id}`, null).pipe(
      map(
        (result: any) => <Object>result
      )
    );
  }

  public create(
    ticket: Ticket
  ): Observable<Ticket> {
    return this.httpClient.post(`${environment.backend.api}/${this.API_PATH}`, ticket).pipe(
      map(
        (result: any) => <Ticket>result
      )
    );
  }

  public delete(id: string): Observable<Ticket> {
    return this.httpClient.delete(`${environment.backend.api}/${this.API_PATH}/${id}`).pipe(
      map(
        (res: any) => {
          return <Ticket>res;
        }
      )
    )
  }

  public update(id: string, form: TicketUpdate) {
    return this.httpClient.patch(`${environment.backend.api}/${this.API_PATH}/${id}`, form).pipe(
      map((res: any) => {
        return <TicketUpdate>this.asObservable;
      })
    );
  }
}
