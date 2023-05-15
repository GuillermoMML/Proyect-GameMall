import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements OnInit {

  ngOnInit() {
  }

  elementos: Observable<any[]>;

  constructor(private router: Router, private firestore: Firestore) {
    this.elementos = this.getElementos();
  }

  getElementos(): Observable<any[]> {
    const elementosRef = collection(this.firestore, 'tendencias'); // Reemplaza 'tu-coleccion-firebase' con el nombre de tu colección en Firebase
    return collectionData(elementosRef) as Observable<any[]>;
  }

  verDetalle(elemento: any) {
    // Redirigir a la página de detalle y pasar el ID del elemento como parámetro
    this.router.navigate(['/detalle', elemento.id]);
  }
}