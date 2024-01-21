import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCountryComboboxComponent } from './mat-country-combobox.component';

describe('MatInputSelectComponent', () => {
  let component: MatCountryComboboxComponent;
  let fixture: ComponentFixture<MatCountryComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCountryComboboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatCountryComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
