import { TestBed } from '@angular/core/testing';

import { ClasseServiseService } from './classes-servise.service';

describe('ClassesServiceService', () => {
  let service: ClasseServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasseServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
