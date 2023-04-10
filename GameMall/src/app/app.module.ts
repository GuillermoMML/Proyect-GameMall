import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadoComponent } from './pages/buscado/buscado.component';
import { CabeceraLoginComponent } from './pages/cabecera-login/cabecera-login.component';
import { CabeceraNologinComponent } from './pages/cabecera-nologin/cabecera-nologin.component';
import { Compra1Component } from './pages/compra1/compra1.component';
import { Compra2Component } from './pages/compra2/compra2.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadoComponent,
    CabeceraLoginComponent,
    CabeceraNologinComponent,
    Compra1Component,
    Compra2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
