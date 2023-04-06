import { Component, OnInit } from '@angular/core';
import datos from '../../assets/datos.json';


@Component({
  selector: 'app-buscado',
  templateUrl: './buscado.component.html',
  styleUrls: ['./buscado.component.css']
})
export class BuscadoComponent {

  datosBuscados: any;

  ngOnInit(){
    this.datosBuscados = this.imagesJson();

  }
  imagesJson() {
    const container: HTMLElement | null = document.getElementById('containerbuscado');
    if (container) {
      datos.buscado.forEach((data: any) => {
        const div = document.createElement('div');

        const img = document.createElement('img');
        img.className = "buscadoimg";
        img.src = data.img;
        img.classList.add('buscadoimg');
        div.appendChild(img);

        const title = document.createElement('label');
        title.innerHTML = data.title;
        title.htmlFor = "Title";
        title.className = "title";
        title.classList.add('title');
        div.appendChild(title);

        const price = document.createElement('label');
        price.innerHTML = `${data.price}`;
        price.className = "price";
        price.classList.add('price');
        div.appendChild(price);

        container.appendChild(div);
      });
    }
  }
}
