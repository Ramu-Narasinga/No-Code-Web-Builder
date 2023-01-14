import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entity, Status } from '../../shared/entity-list/entity-list.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  email: Entity = {
    id: 1,
    title: 'Email One',
    description: 'Sample Description',
    status: Status.DRAFT
  }

  isEditorMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.isEditorMode = JSON.parse(params['isEditorMode'].toLowerCase());
      }
    );
  }

  handleEmailEditBackNav() {

    let emailBackNavToEdit = '/dashboard/email/edit/'+this.email.id;
    let emailBackNavToList = '/dashboard/email/';

    if (this.isEditorMode) {
      this.router.navigate(
        [emailBackNavToEdit],
        {
          queryParams: {
            'isEditorMode': false
          }
        }
      )
    } else {
      this.router.navigate([emailBackNavToList])
    }
   }
}
