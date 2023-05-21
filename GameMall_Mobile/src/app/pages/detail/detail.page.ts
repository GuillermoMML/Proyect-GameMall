import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Firestore, doc, setDoc, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  elemento: any = { favoritoStatus: false };
  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const parsedElemento = params
      this.elemento = Object.assign({}, parsedElemento, { favoritoStatus: false });
      console.log(this.elemento)
      // Retrieve the elemento object using the elementoId from your data source
      // Assign the retrieved elemento to the class property
    });
  }

  toggleFavorito() {
    console.log('Favorito status: ', this.elemento);
    // Perform any other actions based on the toggle status of the specific elemento
    // Save the elemento object to Firestore
    localStorage.setItem('favoritoStatus', JSON.stringify(this.elemento.favoritoStatus));
    const elementoRef = doc(this.firestore, 'buscado/' + this.elemento.id); // Replace 'buscado' with your Firestore collection name
    setDoc(elementoRef, this.elemento)
      .then(() => {
        console.log('Elemento saved to Firestore');
      })
      .catch(error => {
        console.error('Error saving elemento to Firestore: ', error);
      });
    }

    ionViewWillEnter() {
      // Retrieve the toggle status from localStorage
      const status = localStorage.getItem('favoritoStatus');
      if (status !== null) {
        this.elemento.favoritoStatus = JSON.parse(status);
      }
    }
  }
