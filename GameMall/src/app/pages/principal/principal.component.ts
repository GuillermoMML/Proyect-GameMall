import { Component, OnInit } from '@angular/core';

interface Tendencia {
  id: number;
  image_url: string;
}

interface TopVentas {
  id: number;
  image_url: string;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  tendencias: Tendencia[] = [];
  topVentas: TopVentas[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    fetch('/assets/json/datos.json')
      .then(response => response.json())
      .then(data => {
        this.tendencias = data.tendencias;
        this.topVentas = data.topventas;
      })
      .catch(error => {
        console.error('Error loading JSON file:', error);
      });
  }
}