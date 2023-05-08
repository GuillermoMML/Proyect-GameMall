import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticationPage } from './autentication.page';

const routes: Routes = [
  {
    path: '',
    component: AutenticationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutenticationPageRoutingModule {}
