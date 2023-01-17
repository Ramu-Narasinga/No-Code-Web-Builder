import { Component, OnInit } from '@angular/core';
import { Entity } from '../../shared/components/entity-list/entity-list.component';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  website: Entity | null = {} as Entity;

  constructor(private websiteService: WebsiteService) {}

  ngOnInit() {
    this.loadWebsite();
  }

  loadWebsite() {
    this.website = this.websiteService.getWebsiteByActiveId();
  }
}
