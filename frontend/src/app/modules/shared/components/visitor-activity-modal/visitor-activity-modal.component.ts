import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VisitorActivity } from 'src/app/modules/visitor-activity/visitor-activity.component';
import { VisitorActivityService } from 'src/app/modules/visitor-activity/visitor-activity.service';

@Component({
  selector: 'app-visitor-activity-modal',
  templateUrl: './visitor-activity-modal.component.html',
  styleUrls: ['./visitor-activity-modal.component.scss']
})
export class VisitorActivityModalComponent {

  @Input() showVisitorActivityModal: boolean = false;
  @Input() activityIndex: number = 0;
  @Input() activityEventsName: string = '';

  @Output() closeModal = new EventEmitter<boolean>();

  visitorActivity = [];

  constructor(private visitorActivityService: VisitorActivityService) {}

  ngOnInit() {
  }

  onCloseModal() {
    this.closeModal.emit(true);
  }

  ngAfterViewInit() {

  }
}
