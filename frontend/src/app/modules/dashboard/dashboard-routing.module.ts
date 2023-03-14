import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'email',
        loadChildren: () =>
          import('../email/email.module').then((m) => m.EmailModule),
      },
      {
        path: 'website',
        loadChildren: () =>
          import('../website/website.module').then((m) => m.WebsiteModule),
      },
      {
        path: 'visitor-activity',
        loadChildren: () =>
          import('../visitor-activity/visitor-activity.module').then(
            (m) => m.VisitorActivityModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
