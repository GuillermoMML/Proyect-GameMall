import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from "@angular/fire/firestore";
import { Slider, Tendencias, TopVentas, Buscado } from '../interfaces/interfaces';
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

  getBuscados(): Observable<Buscado[]> {
    const buscadoRef = collection(this.firestore, 'buscado')
    return collectionData(buscadoRef, {idField: 'id'}) as Observable<Buscado[]>;
  }

  getBuscadosCoincidentes(title: string): Observable<Buscado[]> {
    const buscadoRef = collection(this.firestore, 'buscado');
  
    if (title === '') {
      return collectionData(buscadoRef, {idField: 'id'}) as Observable<Buscado[]>;
    } else {
      // Convertir la cadena de búsqueda en una lista de palabras clave
      const palabrasClave = title.split(' ');
  
      // Utilizar `array-contains` para buscar coincidencias en la lista de palabras clave
      const coincidencias = where('title', 'array-contains-any', palabrasClave);
      const queryBuscados = query(buscadoRef, coincidencias);
  
      return collectionData(queryBuscados, { idField: 'id' }) as Observable<Buscado[]>;
    }
  }
  
  
  
  
}
