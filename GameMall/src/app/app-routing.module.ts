import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadoComponent } from './buscado/buscado.component';
import { SeleccionadoComponent } from './seleccionado/seleccionado.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { Compra1Component } from './pages/compra1/compra1.component';
import { Compra2Component } from './pages/compra2/compra2.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path:'', component: BuscadoComponent },
  { path:'seleccionado', component: SeleccionadoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'compra1', component: Compra1Component },
  { path: 'compra2', component: Compra2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }