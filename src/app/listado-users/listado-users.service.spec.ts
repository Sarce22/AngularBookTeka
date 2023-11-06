import { TestBed } from '@angular/core/testing';

import { ListadoUsersService } from './listado-users.service';

describe('ListadoUsersService', () => {
  let service: ListadoUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
