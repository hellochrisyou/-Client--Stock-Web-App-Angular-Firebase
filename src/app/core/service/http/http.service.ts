import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeyValuePair } from '@shared/interface/dto.interface';
import { SearchHistory, Stock, JsonString } from '@shared/interface/models';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import * as GLOBAL from '@shared/const/url.const';
import { MatDialog } from '@angular/material';
import { ChartComponent } from '@shared/dialog/chart/chart.component';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  bodyString: JsonString = {
    jsonString: ''
  }
  // tslint:disable-next-line: variable-name
  private iexUrl = GLOBAL.APIURL.iex;
  private chartUrl = GLOBAL.APIURL.chart;
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: variable-name
  private token = '&token=Tsk_1ad1e73bfed34883a302621bf10db807';
  private token2 = '?token=Tsk_1ad1e73bfed34883a302621bf10db807';

  constructor(private http: HttpClient,
    public dialog: MatDialog,
    ) {}

  // REFACTOR BY ADDING URL TO PARAMETER
  public getIex(value: string) {
    const fullIexUrl = this.iexUrl + value + this.token;
    console.log(fullIexUrl);
    return this.http.get<KeyValuePair>(fullIexUrl).pipe(
      retry(3),
      catchError(this.handleError));
  }

  public getChart(value: string, increment: string) {
    const chartFullUrl = this.chartUrl + value + '/chart/' + increment + this.token2;
    return this.http.get<KeyValuePair[]>(chartFullUrl).pipe(
      retry(3),
      catchError(this.handleError));
  }

  // Error Console  
  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + 
        `body was: ${error.error}`);
    }   
    
    // return an observable with a user-facing error message
    
    return throwError(
      'Something bad happened.');
  };
}
