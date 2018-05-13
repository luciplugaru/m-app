import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers: any = {
  };
  
  constructor(private http: HttpClient) {
  }
  
  get(url: string, params?: any, operation?: string): Observable<any> {
    return this.httpRequest('get', {url, params, operation});
  }
  
  // todo : add methods for post, put, (patch), delete
  
  private httpRequest(method: string, options: {
    url: string
    body?: any,
    params?: any,
    operation?: string
  }): Observable<any> {
    
    const httpParams: any = {
      headers: this.headers,
      params: options.params
    };
    
    /** We differentiate POST and PUT from GET and DELETE by the presence of body option */
    return (options.body
      ? this.http[ method ](options.url, options.body, httpParams)
      : this.http[ method ](options.url, httpParams))
      .pipe(
        catchError(this.handleError(options.operation))
      );
  }
  
  private handleError<T> (operation = 'http request') {
    return (error: HttpErrorResponse): Observable<T> => {
      
      if (error.error instanceof ErrorEvent) {
        console.error(`An error occurred: ${operation}`, error.error.message);
      } else {
        console.error(`Backend error: ${error.status} ${error.statusText}`, error.error);
      }
      
      return throwError('Something bad happened; please try again later.');
    };
  }

}

