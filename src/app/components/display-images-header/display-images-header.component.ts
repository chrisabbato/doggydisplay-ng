import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-display-images-header',
  templateUrl: './display-images-header.component.html',
  styleUrls: ['./display-images-header.component.scss'],
})
export class DisplayImagesHeaderComponent implements OnInit {
  @Input() title: string = '';

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}
