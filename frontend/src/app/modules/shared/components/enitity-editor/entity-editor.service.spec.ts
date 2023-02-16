import { TestBed } from '@angular/core/testing';

import { EntityEditorService } from './entity-editor.service';

describe('EntityEditorService', () => {
  let service: EntityEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
