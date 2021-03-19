import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../shared/image.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FullScreenImageComponent } from './full-screen-image/full-screen-image.component';

@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.scss'],
})
export class DisplayImagesComponent implements OnInit {
  @Input() images$: Observable<Image[]> | undefined;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(image: Image): void {
    const dialogRef = this.dialog.open(FullScreenImageComponent, {
      data: { ...image },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
