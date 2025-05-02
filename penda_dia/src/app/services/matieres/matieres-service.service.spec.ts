import { TestBed } from '@angular/core/testing';

import { MatieresServiceService } from './matieres-service.service';

describe('MatieresServiceService', () => {
  let service: MatieresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatieresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
