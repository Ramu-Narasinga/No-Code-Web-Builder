import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {
    this.router = router;
  }

  currentRoute = '';

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof Scroll) {
        this.currentRoute = event.routerEvent.url;
      }
    });
  }
}
