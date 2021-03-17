import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DoggyApiService } from '../../core/doggy-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home';
  breeds: string[] = [];
  filteredBreeds$: Observable<string[]> | undefined;

  constructor(public doggyApi: DoggyApiService) {}

  ngOnInit(): void {
    this.LoadBreeds();
  }

  LoadBreeds() {
    return this.doggyApi.getBreeds().subscribe((data) => {
      this.breeds = Array.from(Object.keys((data as any).message));
      this.filteredBreeds$ = of(this.breeds);
    });
  }

  filterBreeds(searchValue: string) {
    const filtered = this.breeds.filter((breed) =>
      breed.toLowerCase().includes(searchValue.toLowerCase())
    );

    this.filteredBreeds$ = of(filtered);
  }
}
