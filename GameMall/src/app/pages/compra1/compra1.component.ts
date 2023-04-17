import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import datos from '../../../assets/json/datos.json';

interface Data {
  id: number;
  img: string;
  title: string;
  price: string;
}

@Component({
  selector: 'app-compra1',
  templateUrl: './compra1.component.html',
  styleUrls: ['./compra1.component.css']
})
export class Compra1Component {
  recomendados: Data[];

  constructor(private router: Router) {
    this.recomendados = datos.juegos;
  }

  clickCompra2(){
    this.router.navigate(['/compra2']);
    
  }
}