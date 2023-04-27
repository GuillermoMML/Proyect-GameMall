import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Slider, Tendencias, TopVentas } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) {}

  getSlider(): Observable<Slider[]> {
    const sliderRef = collection(this.firestore, 'slider')
    return collectionData(sliderRef, { idField: 'id' }) as Observable<Slider[]>;
  }

  getTendencias(): Observable<Tendencias[]> {
    const tendenciasRef = collection(this.firestore, 'tendencias')
    return collectionData(tendenciasRef, {idField: 'id'}) as Observable<Tendencias[]>;
  }

  getTopVentas(): Observable<TopVentas[]> {
    const topventasRef = collection(this.firestore, 'topventas')
    return collectionData(topventasRef, {idField: 'id'}) as Observable<TopVentas[]>;
  }
}
