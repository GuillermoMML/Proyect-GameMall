import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadoComponent } from './buscado/buscado.component';
import { CabeceraLoginComponent } from './pages/cabecera-login/cabecera-login.component';
import { CabeceraNologinComponent } from './pages/cabecera-nologin/cabecera-nologin.component';

@NgModule({
  declarations: [
    AppComponent,
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
