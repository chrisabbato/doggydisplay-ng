import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DoggyApiService {
  apiURL = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<JSON> {
    return this.http.get<JSON>(`${this.apiURL}/breeds/list/all`).pipe(retry(1));
  }

  getImages(breed?: string, numberOfImages: Number = 4): Observable<JSON> {
    const url = breed
      ? `${this.apiURL}/breed/${breed}/images/random/${numberOfImages}`
      : `${this.apiURL}/breeds/image/random/${numberOfImages}`;
    return this.http.get<JSON>(url).pipe(retry(1));
  }
}
