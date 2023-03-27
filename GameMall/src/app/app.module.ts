import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componetes/header/header.component';
import { FooterComponent } from './componetes/footer/footer.component';
import { BuscadoComponent } from './pages/buscado/buscado.component';
import { CabeceraLoginComponent } from './pages/cabecera-login/cabecera-login.component';
import { CabeceraNologinComponent } from './pages/cabecera-nologin/cabecera-nologin.component';
import { Compra1Component } from './pages/compra1/compra1.component';
import { Compra2Component } from './pages/compra2/compra2.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { InfoJuegoComponent } from './pages/info-juego/info-juego.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuscadoComponent,
    CabeceraLoginComponent,
    CabeceraNologinComponent,
    Compra1Component,
    Compra2Component,
    ContactUsComponent,
    InfoJuegoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
