import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorActivityModalComponent } from './visitor-activity-modal.component';

describe('VisitorActivityModalComponent', () => {
  let component: VisitorActivityModalComponent;
  let fixture: ComponentFixture<VisitorActivityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorActivityModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorActivityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
