import { Component } from '@angular/core';
import { Entity, Status } from '../../shared/entity-list/entity-list.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  email: Entity = {
    id: 1,
    title: 'Email One',
    description: 'Sample Description',
    status: Status.DRAFT
  }
}
