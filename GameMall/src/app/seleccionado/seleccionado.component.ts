import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-seleccionado',
  templateUrl: './seleccionado.component.html',
  styleUrls: ['./seleccionado.component.css']
})
export class SeleccionadoComponent {

  constructor(private route: ActivatedRoute, private routing : Router) {}
  item:any


  ngOnInit() {
    // Obtener el objeto item de la URL
    this.item = JSON.parse(this.route.snapshot.queryParams['item']);
    // Utilizar el objeto item para renderizar la imagen
    // ...
  }

  clickCompra(){
    this.routing.navigate(['/compra1']); 
  }
  
}
