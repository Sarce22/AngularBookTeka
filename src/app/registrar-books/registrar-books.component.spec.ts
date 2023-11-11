import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBooksComponent } from './registrar-books.component';

describe('RegistrarBooksComponent', () => {
  let component: RegistrarBooksComponent;
  let fixture: ComponentFixture<RegistrarBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarBooksComponent]
    });
    fixture = TestBed.createComponent(RegistrarBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
