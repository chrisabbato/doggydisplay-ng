import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DoggyApiService } from '../shared/doggy-api.service';
import { Image } from '../shared/image.model';

@Component({
  selector: 'app-doggos',
  templateUrl: './doggos.component.html',
  styleUrls: ['./doggos.component.scss'],
})
export class DoggosComponent implements OnInit {
  breed: string = '';
  images$: Observable<Image[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    public doggyApi: DoggyApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.breed = params.get('breed') || '';
    });

    this.LoadImages();
  }

  LoadImages() {
    return this.doggyApi.getImages(this.breed).subscribe((data) => {
      const images = (data as any).message.map((image: URL, index: number) => {
        return {
          url: image,
          alt: `Random ${this.breed} #${++index}`,
        };
      });

      this.images$ = of(images);
    });
  }
}
