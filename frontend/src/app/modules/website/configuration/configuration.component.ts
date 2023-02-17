import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-website-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  websiteRendererScriptSrc = environment.websiteRendererScriptSrc;
  ncwbRecorderScript = environment.ncwbRecorderScript;
  ncwbRecorderCss = environment.ncwbRecorderCss;
  websiteId;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.websiteId = Number(this.route.snapshot.paramMap.get('id'))??-1
  }

  getUserId() {
    return localStorage.getItem("userId");
  }

  getWebsiteRendererScript() {
    return `
      <script
        data-ncwb-id="ncwb"
        data-user-id='${this.getUserId()}'
        data-website-id='${this.websiteId}'
      ></script>
      <div id='ncwb-website'></div>
      <script src='${this.websiteRendererScriptSrc}' type="text/javascript"></script>

      <!-- To record visitor activity -->
      <div id="ncwb-recorder"></div>
      <script src='${this.ncwbRecorderScript}'></script>
      <link rel='stylesheet' href='${this.ncwbRecorderCss}'>
    `
  }

}
