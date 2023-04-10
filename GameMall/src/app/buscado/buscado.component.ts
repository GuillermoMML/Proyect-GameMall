import { Component } from '@angular/core';
import datos from '../../assets/datos.json';


@Component({
  selector: 'app-buscado',
  templateUrl: './buscado.component.html',
  styleUrls: ['./buscado.component.css']
})

export class BuscadoComponent {

  public buscado: { id: number; img: string; title: string; price: string; }[] =datos.buscado;

}
