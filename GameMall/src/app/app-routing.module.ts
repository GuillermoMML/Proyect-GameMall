import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadoComponent } from './buscado/buscado.component';
import { SeleccionadoComponent } from './seleccionado/seleccionado.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path:'navegacion', component: BuscadoComponent },
  { path:'seleccionado', component: SeleccionadoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }