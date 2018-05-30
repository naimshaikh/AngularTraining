import { TestBed, async, inject } from '@angular/core/testing';

import { AuthappGuard } from './authapp.guard';

describe('AuthappGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthappGuard]
    });
  });

  it('should ...', inject([AuthappGuard], (guard: AuthappGuard) => {
    expect(guard).toBeTruthy();
  }));
});
