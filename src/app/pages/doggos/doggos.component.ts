import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DoggyApiService } from '../../core/services/doggy-api.service';
import { Image } from '../../shared/image.model';

@Component({
  selector: 'app-doggos',
  templateUrl: './doggos.component.html',
  styleUrls: ['./doggos.component.scss'],
})
export class DoggosComponent implements OnInit {
  breed: string = '';
  images$: Observable<Image[]> | undefined;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private doggyApi: DoggyApiService
  ) {}

  ngOnInit(): void {
    this.error = false;
    this.route.paramMap.subscribe((params) => {
      this.breed = params.get('breed') || '';
      this.LoadImages();
    });
  }

  LoadImages() {
    return this.doggyApi.getImages(this.breed, 6).subscribe(
      (data) => {
        const images = (data as any).message.map(
          (image: URL, index: number) => {
            return {
              url: image,
              alt: `Random ${this.breed} #${++index}`,
            };
          }
        );

        this.error = false;
        this.images$ = of(images);
      },
      (error) => {
        this.error = true;
      }
    );
  }
}
