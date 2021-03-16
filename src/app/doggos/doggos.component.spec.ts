import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggosComponent } from './doggos.component';

describe('DoggosComponent', () => {
  let component: DoggosComponent;
  let fixture: ComponentFixture<DoggosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoggosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
