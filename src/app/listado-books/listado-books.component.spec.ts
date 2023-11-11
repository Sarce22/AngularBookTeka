import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBooksComponent } from './listado-books.component';

describe('ListadoBooksComponent', () => {
  let component: ListadoBooksComponent;
  let fixture: ComponentFixture<ListadoBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoBooksComponent]
    });
    fixture = TestBed.createComponent(ListadoBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
