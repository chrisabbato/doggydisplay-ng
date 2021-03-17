import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DoggyApiService } from './doggy-api.service';

describe('DoggyApiService', () => {
  let service: DoggyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DoggyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
