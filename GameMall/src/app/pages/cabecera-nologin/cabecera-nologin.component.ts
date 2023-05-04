import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera-nologin',
  templateUrl: './cabecera-nologin.component.html',
  styleUrls: ['./cabecera-nologin.component.css']
})
export class CabeceraNologinComponent {
  constructor(private router: Router) { }


  onSearchSubmit(){
    const searchInput = document.querySelector<HTMLInputElement>('#searchInput')?.value;
    console.log(searchInput)
    this.router.navigate(['/navegacion'], { queryParams: { item: JSON.stringify(searchInput) } });
  }
  
  onButtonClickLogin() {
    this.router.navigate(['/login']);
  }

  onButtonClickRegister() {
    this.router.navigate(['/register']);
  }
  
}
