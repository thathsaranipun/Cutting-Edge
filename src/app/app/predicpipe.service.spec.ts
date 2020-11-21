import { TestBed } from '@angular/core/testing';

import { PredicpipeService } from './predicpipe.service';

describe('PredicpipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredicpipeService = TestBed.get(PredicpipeService);
    expect(service).toBeTruthy();
  });
});
