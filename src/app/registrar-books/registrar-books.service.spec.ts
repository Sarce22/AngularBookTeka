import { TestBed } from '@angular/core/testing';

import { RegistrarBooksService } from './registrar-books.service';

describe('RegistrarBooksService', () => {
  let service: RegistrarBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
