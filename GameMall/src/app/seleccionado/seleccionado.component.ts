import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seleccionado',
  templateUrl: './seleccionado.component.html',
  styleUrls: ['./seleccionado.component.css']
})
export class SeleccionadoComponent {

  constructor(private route: ActivatedRoute) {}
  item:any

  ngOnInit() {
    // Obtener el objeto item de la URL
    this.item = JSON.parse(this.route.snapshot.queryParams['item']);
    console.log('El item seleccionado es:', this.item);
    // Utilizar el objeto item para renderizar la imagen
    // ...
  }
  
}
