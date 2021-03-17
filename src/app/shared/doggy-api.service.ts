import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DoggyApiService {
  apiURL = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<JSON> {
    return this.http
      .get<JSON>(`${this.apiURL}/breeds/list/all`)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
