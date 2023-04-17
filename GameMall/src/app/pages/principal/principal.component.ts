import { Component, OnInit } from '@angular/core';

interface Tendencia {
  id: number;
  image_url: string;
}

interface TopVentas {
  id: number;
  image_url: string;
}

interface Image {
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
  images: Image[] = [];
  activeSlideIndex = 0;
  loadedImages = 0;

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
      this.images = data.slider;
      this.startSlideTimer();
    })
    .catch(error => {
      console.error('Error loading JSON file:', error);
    });
  }

  startSlideTimer() {
    const imagesToLoad = this.images.length;
    let imagesLoaded = 0;
  
    // Preload all the images
    this.images.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === imagesToLoad) {
          // All images have been loaded, start the slide timer
            setInterval(() => {
              if (this.images.length > 0) {
                const nextSlideIndex = (this.activeSlideIndex + 1) % this.images.length;
                this.activeSlideIndex = nextSlideIndex;
              }
            }, 5000); // Change slide every 5 seconds          
        }
      };
      img.src = image.image_url;
    });
  }
  

}