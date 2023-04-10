import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BuscadoComponent } from './pages/buscado/buscado.component';
import { CabeceraLoginComponent } from './pages/cabecera-login/cabecera-login.component';
import { CabeceraNologinComponent } from './pages/cabecera-nologin/cabecera-nologin.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    RegisterComponent,
    BuscadoComponent,
    CabeceraLoginComponent,
    CabeceraNologinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
