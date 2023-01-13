import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'email',
    loadChildren: () =>
      import('./email/email.module').then((m) => m.EmailModule),
  },
  {
    path: 'website',
    loadChildren: () =>
      import('./website/website.module').then((m) => m.WebsiteModule),
  },
  {
    path: 'visitor-activity',
    loadChildren: () =>
      import('./visitor-activity/visitor-activity.module').then(
        (m) => m.VisitorActivityModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}