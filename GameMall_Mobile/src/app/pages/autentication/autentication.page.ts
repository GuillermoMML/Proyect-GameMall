import { Component } from '@angular/core';
import { Auth ,signInWithEmailAndPassword} from '@angular/fire/auth';
import { UserService } from '../../services/auth.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-autentication',
  templateUrl: './autentication.page.html',
  styleUrls: ['./autentication.page.scss'],
})
export class AutenticationPage {

  email = "";
  password="";

  constructor(private afAuth: UserService, private router: Router) {}

  async login() {
    try {
      this.afAuth.login({email: this.email,password:this.password})
      // Inicio de sesión exitoso, redirigir al usuario a la página principal
      console.log(this.afAuth.getLoggin());
      console.log(this.afAuth.getCurrentUser())
      this.router.navigate(['/home'])
    } catch (error) {
      // Mostrar mensaje de error al usuario
      alert('El usuario o la contraseña no coinciden');
    }
  }
  
}
