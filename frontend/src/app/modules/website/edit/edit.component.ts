import { Component, OnInit } from '@angular/core';
import { Entity } from '../../shared/components/entity-list/entity-list.component';
import { WebsiteService } from '../website.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  website: Entity = {} as Entity;
  editorSaveEndpoint = '';
  isEditorMode = false;

  constructor(
    private websiteService: WebsiteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setEditorMode();
    this.websiteService.setActiveWebsiteId(Number(this.route.snapshot.paramMap.get('id'))??-1);
    this.websiteService.setEditorSaveEndpoint();
    this.editorSaveEndpoint = this.websiteService.getEditorSaveEndpoint();
    this.loadWebsiteFromServiceData();
  }

  isWebsiteEmpty() {
    return Object.keys(this.website).length == 0;
  }

  loadWebsiteFromServiceData() {
    this.website = this.websiteService.getWebsiteByActiveId() ?? {} as Entity;
    if (this.isWebsiteEmpty()) {
      this.loadWebsiteFromServer();
    }
  }

  loadWebsiteFromServer() {
    this.websiteService.fetchWebsiteByActiveId()
      .subscribe(res => {
        console.log("res in ngoninit", res);
        this.websiteService.setActiveWebsite(res);
        this.website = this.websiteService.activeWebsite ?? {} as Entity;
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

  handleWebsiteEditBackNav() {

    let websiteBackNavToEdit;
    let websiteBackNavToList = '/dashboard/website/';

    if (this.website) {
      websiteBackNavToEdit = '/dashboard/website/edit/'+this.website.id;
    } else {
      websiteBackNavToEdit = '/dashboard/website/';
    }

    if (this.isEditorMode) {
      this.router.navigate(
        [websiteBackNavToEdit],
        {
          queryParams: {
            'isEditorMode': false
          }
        }
      )
    } else {
      this.router.navigate([websiteBackNavToList])
    }
   }
}
