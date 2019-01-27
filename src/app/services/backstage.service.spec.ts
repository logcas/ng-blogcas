import { TestBed } from '@angular/core/testing';

import { BackstageService } from './backstage.service';

describe('BackstageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackstageService = TestBed.get(BackstageService);
    expect(service).toBeTruthy();
  });
});
