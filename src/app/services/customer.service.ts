import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../types/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private source = new Subject<Customer>();

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  public asObservable() {
    return this.source.asObservable();
  }

  public register(customer: Customer) {
    this.source.next(customer);
  }

  public getAll(): Observable<Customer[]> {
    return this.httpClient.get(`${environment.backend.api}/customer`).pipe(
      map(
        (res: any) => {
          return res.map(
            (customer: any) => <Customer>customer
          );
        }
      )
    );
  }

  public delete(id: string): Observable<Customer> {
    return this.httpClient.delete(`${environment.backend.api}/customer/${id}`).pipe(
      map(
        (res: any) => {
          return <Customer>res;
        }
      )
    );
  }
}
