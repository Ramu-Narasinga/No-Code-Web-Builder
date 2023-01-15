import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCreateModalComponent } from './entity-create-modal.component';

describe('EntityCreateModalComponent', () => {
  let component: EntityCreateModalComponent;
  let fixture: ComponentFixture<EntityCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityCreateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
