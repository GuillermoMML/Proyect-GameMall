import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import datos from '../../assets/datos.json';

@Component({
  selector: 'app-buscado',
  templateUrl: './buscado.component.html',
  styleUrls: ['./buscado.component.css']
})

export class BuscadoComponent implements OnInit {
  public buscado: { id: number; img: string; title: string; price: string; }[] =datos.buscado;
  public nameFilter: string = '';

  constructor (private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const nameFilter = params['game'];
        if (nameFilter) {
        this.buscado = datos.buscado.filter(item => item.title.toLowerCase().includes(nameFilter.toLowerCase()));
        this.nameFilter = nameFilter;
      } else {
        this.nameFilter = '';
      }
    });
    console.log(this.buscado);

  }

  onButtonClickSeleccionado(item: any){
    this.router.navigate(['/seleccionado'], { queryParams: { item: JSON.stringify(item) } });
  }
}
