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
  email: Entity = {} as Entity ;

  isEditorMode = false;
  editorSaveEndpoint = '';
  emailMeta: any | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.setEditorMode();
    this.emailService.setActiveEmailId(Number(this.route.snapshot.paramMap.get('id'))??-1);
    this.emailService.setEditorSaveEndpoint();
    this.editorSaveEndpoint = this.emailService.getEditorSaveEndpoint();
    this.loadEmailFromServiceData();
  }

  isEmailEmpty() {
    return Object.keys(this.email).length == 0;
  }

  loadEmailFromServiceData() {
    this.email = this.emailService.getEmailByActiveId() ?? {} as Entity;
    if (this.isEmailEmpty()) {
      this.loadEmailFromServer();
    }
  }

  loadEmailFromServer() {
    this.emailService.fetchWebsiteByActiveId()
      .subscribe((res: any) => {
        console.log("res in ngoninit", res);
        this.emailService.setActiveEmail(res);
        this.email = this.emailService.activeEmail ?? {} as Entity;
        this.emailMeta = res?.emailMeta
      })
  }

  setEditorMode() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.isEditorMode = JSON.parse(params['isEditorMode'].toLowerCase());
      }
    );
  }

  // TODO: move these to service // stinks (code smell) lol
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
