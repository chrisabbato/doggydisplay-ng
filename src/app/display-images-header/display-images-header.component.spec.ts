import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayImagesHeaderComponent } from './display-images-header.component';

describe('DisplayImagesHeaderComponent', () => {
  let component: DisplayImagesHeaderComponent;
  let fixture: ComponentFixture<DisplayImagesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayImagesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayImagesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
