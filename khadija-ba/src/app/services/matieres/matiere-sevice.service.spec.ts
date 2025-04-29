import { TestBed } from '@angular/core/testing';

import { MatiereSeviceService } from './matiere-sevice.service';

describe('MatiereSeviceService', () => {
  let service: MatiereSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatiereSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
