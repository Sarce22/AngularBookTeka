import { TestBed } from '@angular/core/testing';

import { ListadoBooksService } from './listado-books.service';

describe('ListadoBooksService', () => {
  let service: ListadoBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
