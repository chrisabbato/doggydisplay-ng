import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../shared/image.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.scss'],
})
export class DisplayImagesComponent implements OnInit {
  @Input() images$: Observable<Image[]> | undefined;

  constructor() {}

  ngOnInit(): void {}
}
