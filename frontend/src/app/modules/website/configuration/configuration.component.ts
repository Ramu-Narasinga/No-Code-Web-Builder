import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  websiteScript = environment.websiteScriptSrc;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    Number(this.route.snapshot.paramMap.get('id'))??-1
  }

}
