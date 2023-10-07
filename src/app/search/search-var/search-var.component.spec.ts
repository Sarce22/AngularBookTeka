import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVarComponent } from './search-var.component';

describe('SearchVarComponent', () => {
  let component: SearchVarComponent;
  let fixture: ComponentFixture<SearchVarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchVarComponent]
    });
    fixture = TestBed.createComponent(SearchVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
