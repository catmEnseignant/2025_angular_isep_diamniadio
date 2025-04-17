import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatieresComponent } from './list-matieres.component';

describe('ListMatieresComponent', () => {
  let component: ListMatieresComponent;
  let fixture: ComponentFixture<ListMatieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMatieresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
