import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, query, where, DocumentReference, addDoc, getDocs } from "@angular/fire/firestore";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  password: string = '';
  imagenPerfil: File | null = null;

  constructor(private auth: Auth, private fireStore: Firestore) { }

  ngOnInit(): void {
    
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

}
