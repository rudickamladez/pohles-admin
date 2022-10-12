import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TimeSum } from '../types/time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private API_PATH: string = 'time';

  constructor(
    private readonly httpClient: HttpClient
  ) {

  }

  public getActiveSum(): Observable<TimeSum> {
    return this.httpClient.get(`${environment.backend.api}/${this.API_PATH}/active/sum`).pipe(
      map(
        (timeSum: any) => <TimeSum>timeSum
      )
    );
  }
}
