import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router'
import datos from '../../assets/datos.json';


@Component({
  selector: 'app-buscado',
  templateUrl: './buscado.component.html',
  styleUrls: ['./buscado.component.css']
})

export class BuscadoComponent {
  public buscado: { id: number; img: string; title: string; price: string; }[] =datos.buscado;

  constructor (private router: Router ) {}

  onButtonClickSeleccionado(item: any){
    this.router.navigate(['/seleccionado'], { queryParams: { item: JSON.stringify(item) } });
  }
  
}
