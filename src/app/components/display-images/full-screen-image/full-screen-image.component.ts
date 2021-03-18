import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from 'src/app/shared/image.model';
import { DisplayImagesComponent } from '../display-images.component';

@Component({
  selector: 'app-full-screen-image',
  templateUrl: './full-screen-image.component.html',
  styleUrls: ['./full-screen-image.component.scss'],
})
export class FullScreenImageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DisplayImagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Image
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
