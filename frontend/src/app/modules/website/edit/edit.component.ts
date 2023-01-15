import { Component } from '@angular/core';
import { Entity, Status } from '../../shared/components/entity-list/entity-list.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  website: Entity = {
    id: 1,
    title: 'Website One',
    description: 'Sample Description',
    status: Status.DRAFT
  }
}
