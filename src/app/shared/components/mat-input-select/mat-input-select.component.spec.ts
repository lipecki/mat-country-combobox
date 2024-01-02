import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputSelectComponent } from './mat-input-select.component';

describe('MatInputSelectComponent', () => {
  let component: MatInputSelectComponent;
  let fixture: ComponentFixture<MatInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
