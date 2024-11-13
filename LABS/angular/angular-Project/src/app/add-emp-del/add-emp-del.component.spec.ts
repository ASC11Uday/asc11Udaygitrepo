import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpDelComponent } from './add-emp-del.component';

describe('AddEmpDelComponent', () => {
  let component: AddEmpDelComponent;
  let fixture: ComponentFixture<AddEmpDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmpDelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
