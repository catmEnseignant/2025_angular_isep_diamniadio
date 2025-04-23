import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMatieresComponent } from './form.matieres.component';

describe('FormMatieresComponent', () => {
  let component: FormMatieresComponent;
  let fixture: ComponentFixture<FormMatieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMatieresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
