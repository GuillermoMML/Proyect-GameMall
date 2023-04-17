import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra2',
  templateUrl: './compra2.component.html',
  styleUrls: ['./compra2.component.css']
})
export class Compra2Component {

  constructor(private router: Router) { }

  clickSeguirComprando(){
    this.router.navigate(['/']);
  }
}
