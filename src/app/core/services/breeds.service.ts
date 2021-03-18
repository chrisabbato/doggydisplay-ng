import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DoggyApiService } from './doggy-api.service';

@Injectable({
  providedIn: 'root',
})
export class BreedsService {
  private _breeds$: BehaviorSubject<string[]> = new BehaviorSubject(['']);
  readonly breeds$: Observable<string[]> = this._breeds$.asObservable();

  constructor(private http: HttpClient, private doggyApi: DoggyApiService) {
    this.updateBreeds();
  }

  updateBreeds() {
    return this.doggyApi.getBreeds().subscribe(
      (data) => {
        this._breeds$.next(Array.from(Object.keys((data as any).message)));
      },
      (error) => this._breeds$.error(error)
    );
  }

  getBreeds(): Observable<string[]> {
    return this.breeds$;
  }
}
