import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnitityEditorComponent } from './enitity-editor.component';

describe('EnitityEditorComponent', () => {
  let component: EnitityEditorComponent;
  let fixture: ComponentFixture<EnitityEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnitityEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnitityEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
