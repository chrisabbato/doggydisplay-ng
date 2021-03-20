import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayImagesComponent } from './display-images.component';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

describe('DisplayImagesComponent', () => {
  let component: DisplayImagesComponent;
  let fixture: ComponentFixture<DisplayImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayImagesComponent],
      imports: [MatDialogModule],

      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: undefined,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
