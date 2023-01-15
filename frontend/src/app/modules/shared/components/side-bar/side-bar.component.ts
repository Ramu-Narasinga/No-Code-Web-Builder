import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

enum DashBoardModules {
  Website = 'website',
  Email = 'email',
  VisitorActivity = 'visitor-activity'
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public get DashBoardModules(): typeof DashBoardModules {
    return DashBoardModules;
  }

  constructor(
    private router: Router
  ) {}

  activeModule: string = '';

  ngOnInit(): void {
    let activeUrl = this.router.url;

    if (activeUrl.includes(DashBoardModules.Website)) {
      this.activeModule = DashBoardModules.Website;
    } else if (activeUrl.includes(DashBoardModules.Email)) {
      this.activeModule = DashBoardModules.Email;
    } else if (activeUrl.includes(DashBoardModules.VisitorActivity)) {
      this.activeModule = DashBoardModules.VisitorActivity;
    }
  }

  setActiveModule(activeModule) {
    this.activeModule = activeModule;
  }
}
