import { TestBed } from '@angular/core/testing';

import { AuthservService } from './authserv.service';

describe('AuthservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthservService = TestBed.get(AuthservService);
    expect(service).toBeTruthy();
  });
});
