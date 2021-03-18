import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreedsService } from 'src/app/core/services/breeds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home';
  filteredBreeds$: Observable<string[]> | undefined;

  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    this.filteredBreeds$ = this.breedsService.getBreeds();
  }

  filterBreeds(searchValue: string) {
    this.breedsService.getBreeds().subscribe((data) => {
      this.filteredBreeds$ = of(
        data.filter((breed) =>
          breed.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    });
  }
}
