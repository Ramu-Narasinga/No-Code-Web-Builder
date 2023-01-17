import { Component, OnInit } from '@angular/core';
import { Entity } from '../../shared/components/entity-list/entity-list.component';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  website: Entity = {} as Entity;

  constructor(private websiteService: WebsiteService) {}

  ngOnInit() {
    this.loadWebsiteFromServiceData();
  }

  loadWebsiteFromServiceData() {
    this.website = this.websiteService.getWebsiteByActiveId() ?? {} as Entity;
    if (this.website == null) {
      this.loadWebsiteFromServer()
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
}
