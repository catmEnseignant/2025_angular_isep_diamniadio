import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesssonComponent } from './lessson.component';

describe('LesssonComponent', () => {
  let component: LesssonComponent;
  let fixture: ComponentFixture<LesssonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesssonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesssonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
