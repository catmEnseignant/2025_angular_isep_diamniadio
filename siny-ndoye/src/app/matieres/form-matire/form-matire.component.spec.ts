import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMatireComponent } from './form-matire.component';

describe('FormMatireComponent', () => {
  let component: FormMatireComponent;
  let fixture: ComponentFixture<FormMatireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMatireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMatireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
