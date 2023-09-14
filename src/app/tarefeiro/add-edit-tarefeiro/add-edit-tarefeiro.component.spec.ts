import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTarefeiroComponent } from './add-edit-tarefeiro.component';

describe('AddEditTarefeiroComponent', () => {
  let component: AddEditTarefeiroComponent;
  let fixture: ComponentFixture<AddEditTarefeiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditTarefeiroComponent]
    });
    fixture = TestBed.createComponent(AddEditTarefeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
