import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTarefeiroComponent } from './show-tarefeiro.component';

describe('ShowTarefeiroComponent', () => {
  let component: ShowTarefeiroComponent;
  let fixture: ComponentFixture<ShowTarefeiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTarefeiroComponent]
    });
    fixture = TestBed.createComponent(ShowTarefeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
