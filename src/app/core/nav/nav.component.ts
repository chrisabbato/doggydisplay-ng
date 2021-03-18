import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreedsService } from '../services/breeds.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  title = `${String.fromCodePoint(128021)} Doggy Display`;

  constructor(private breedsService: BreedsService, private router: Router) {}

  randomBreed() {
    let breed = '';

    this.breedsService.getBreeds().subscribe((breeds) => {
      const index = Math.floor(Math.random() * breeds.length);
      breed = breeds[index];
    });

    this.router.navigate([`doggos`, breed]);
  }
}
