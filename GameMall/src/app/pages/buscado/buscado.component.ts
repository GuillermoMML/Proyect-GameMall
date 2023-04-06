import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscado',
  templateUrl: './buscado.component.html',
  styleUrls: ['./buscado.component.css']
})
export class BuscadoComponent implements OnInit {

  datosBuscados: HTMLElement = document.createElement('div');

  ngOnInit(){
    this.imagesJson().then(container => {
      this.datosBuscados = container;
    });
  }

  imagesJson(): Promise<HTMLElement> {
    return fetch('../../../data/datos.json')
        .then(response => response.json())
        .then(data => {
            const container: HTMLElement | null = document.getElementById('containerbuscado');
            if (container) {
                data.buscado.map((data: any) => {
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
            return container as HTMLElement;
        });
  }
}
