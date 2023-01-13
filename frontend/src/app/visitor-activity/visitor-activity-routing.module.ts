import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorActivityComponent } from './visitor-activity.component';

const routes: Routes = [{ path: '', component: VisitorActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorActivityRoutingModule { }
