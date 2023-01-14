import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'email',
    loadChildren: () =>
      import('./modules/email/email.module').then((m) => m.EmailModule),
  },
  {
    path: 'website',
    loadChildren: () =>
      import('./modules/website/website.module').then((m) => m.WebsiteModule),
  },
  {
    path: 'visitor-activity',
    loadChildren: () =>
      import('./modules/visitor-activity/visitor-activity.module').then(
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
