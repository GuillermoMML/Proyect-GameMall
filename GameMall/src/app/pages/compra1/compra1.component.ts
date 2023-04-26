import { Component } from '@angular/core';
import datos from '../../../assets/json/datos.json'

@Component({
  selector: 'app-compra1',
  templateUrl: './compra1.component.html',
  styleUrls: ['./compra1.component.css']
})
export class Compra1Component{

  recomendados: any;

  ngOnInit(){
    this.recomendados = this.mostrarRecomendados();
  }

  mostrarRecomendados() {
    
          interface Data {
            id: number;
            img: string;
            title: string;
            price: string;
          }
          const container: HTMLElement | null = document.getElementById('sugerencias');
          if(container){
            datos.juegos.forEach((data: Data) => {
              const div = document.createElement('div');

              const img = document.createElement('img');
              img.className = "recomendado-img;"
              img.src = data.img;
              img.classList.add('recomendado-img')
              div.appendChild(img)

              const title = document.createElement('label')
              title.innerHTML = data.title;
              title.htmlFor = "Title";
              title.className = "title";
              title.classList.add('title')
              div.appendChild(title);

              const price = document.createElement('label');
              price.innerHTML = `${data.price}`;
              price.className = "price";
              price.classList.add('price')
              div.appendChild(price);

               
              container.appendChild(div)
          });
          
          }
          return container;
}
}
