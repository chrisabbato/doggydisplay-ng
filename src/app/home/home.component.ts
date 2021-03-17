import { Component, OnInit } from '@angular/core';
import { DoggyApiService } from '../shared/doggy-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home';
  breeds: string[] = [];
  filteredBreeds: string[] = [];

  constructor(public doggyApi: DoggyApiService) {}

  ngOnInit(): void {
    this.LoadBreeds();
  }

  LoadBreeds() {
    return this.doggyApi.getBreeds().subscribe((data) => {
      this.breeds = Array.from(Object.keys((data as any).message));
      this.filteredBreeds = this.breeds;
    });
  }

  filterBreeds(searchValue: string) {
    this.filteredBreeds = this.breeds.filter((breed) =>
      breed.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
