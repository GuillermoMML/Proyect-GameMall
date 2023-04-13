import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera-nologin',
  templateUrl: './cabecera-nologin.component.html',
  styleUrls: ['./cabecera-nologin.component.css']
})
export class CabeceraNologinComponent {
  constructor(private router: Router) { }
  
  onButtonClickLogin() {
    this.router.navigate(['/login']);
  }

  onButtonClickRegister() {
    this.router.navigate(['/register']);
  }
  
}
