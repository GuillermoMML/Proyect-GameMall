import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Buscado } from 'src/app/interfaces/interfaces';

import datos from '../../assets/datos.json';

@Component({
  selector: 'app-buscado',
  templateUrl: './buscado.component.html',
  styleUrls: ['./buscado.component.css']
})

export class BuscadoComponent implements OnInit {
  public nameFilter: string = '';
  buscado: Buscado[] = [];

  constructor (private router: Router, private activatedRoute: ActivatedRoute,private dataService: DataService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const nameFilter = params['game'] || '';
      this.nameFilter = nameFilter;
  
      this.dataService.getBuscados().subscribe(resultItem => {
        const aux = resultItem;
        this.buscado = aux.filter(item => item.title.toLowerCase().includes(nameFilter.toLowerCase()));
      });
    });
  }
  
  

  onButtonClickSeleccionado(item: any){
    this.router.navigate(['/seleccionado'], { queryParams: { item: JSON.stringify(item) } });
  }
}
