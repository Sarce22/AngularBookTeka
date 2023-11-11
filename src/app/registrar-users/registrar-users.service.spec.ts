import { TestBed } from '@angular/core/testing';

import { RegistrarUsersService } from './registrar-users.service';

describe('RegistrarUsersService', () => {
  let service: RegistrarUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
