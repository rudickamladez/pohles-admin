import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../types/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
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
}
