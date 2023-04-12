import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadoComponent } from './buscado/buscado.component';
import { SeleccionadoComponent } from './seleccionado/seleccionado.component';
const routes: Routes = [

  { path:'', component: BuscadoComponent },
  { path:'seleccionado', component: SeleccionadoComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
