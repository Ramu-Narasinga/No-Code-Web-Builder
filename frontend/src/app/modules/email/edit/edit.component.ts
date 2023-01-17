import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entity } from '../../shared/components/entity-list/entity-list.component';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  email: Entity | null = {} as Entity;

  isEditorMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.setEditorMode();
    this.loadEmail();
  }

  loadEmail() {
    this.email = this.emailService.getEmailByActiveId();
  }

  setEditorMode() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.isEditorMode = JSON.parse(params['isEditorMode'].toLowerCase());
      }
    );
  }

  handleEmailEditBackNav() {

    let emailBackNavToEdit;
    let emailBackNavToList = '/dashboard/email/';

    if (this.email) {
      emailBackNavToEdit = '/dashboard/email/edit/'+this.email.id;
    } else {
      emailBackNavToEdit = '/dashboard/email/';
    }

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
