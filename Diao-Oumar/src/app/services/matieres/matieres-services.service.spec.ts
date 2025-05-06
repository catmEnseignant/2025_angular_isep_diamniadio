import { TestBed } from '@angular/core/testing';

import { MatieresServicesService } from './matieres-services.service';

describe('MatieresServicesService', () => {
  let service: MatieresServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatieresServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
