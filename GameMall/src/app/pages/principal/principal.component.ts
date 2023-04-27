import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Tendencias, Slider, TopVentas } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  tendencias: Tendencias[] = [];
  topVentas: TopVentas[] = [];
  sliderImages: Slider[] = [];
  activeSlideIndex = 0;
  loadedImages = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSlider().subscribe(sliderImg => {
      this.sliderImages = sliderImg;
      console.log(sliderImg)
    })
    this.dataService.getTendencias().subscribe(tends => {
      this.tendencias = tends;
    })
    this.dataService.getTopVentas().subscribe(topvents => {
      this.topVentas = topvents;
    })
    this.startSlideTimer();
  }

  startSlideTimer() {
    const imagesToLoad = this.sliderImages.length;
    let imagesLoaded = 0;
  
    // Preload all the images
    this.sliderImages.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === imagesToLoad) {
          // All images have been loaded, start the slide timer
            setInterval(() => {
              if (this.sliderImages.length > 0) {
                const nextSlideIndex = (this.activeSlideIndex + 1) % this.sliderImages.length;
                this.activeSlideIndex = nextSlideIndex;
              }
            }, 5000); // Change slide every 5 seconds          
        }
      };
      img.src = image.img_url;
    });
  }
}