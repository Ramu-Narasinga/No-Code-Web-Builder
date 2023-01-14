import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EmailComponent } from './email.component';

const routes: Routes = [{
  path: '',
  component: EmailComponent
}, {
    path: 'edit/:id',
    component: EditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
