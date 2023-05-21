import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import { getAuth, updateProfile } from "firebase/auth"; 
import { BehaviorSubject } from 'rxjs';
import { Firestore, collection, where, query, CollectionReference, getDocs } from '@angular/fire/firestore';
import { updateEmail, updatePassword} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private userData: any;
  private data = new BehaviorSubject<string>('');
  public data$ = this.data.asObservable();
  
  constructor(private auth: Auth, private fireStore: Firestore) { }

  register({ email, password}: any){
    return  createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  setLoggin(valor: boolean){
    this.isLoggedIn.next(valor);
  }

  getLoggin(){
    return this.isLoggedIn.asObservable();
  }

  getFirestore() {
    return this.fireStore;
  }

  setData(data: string): void {
    this.data.next(data);
  }

  getUsername() {
    return this.data;
  }

  getCurrentUser(){
    return this.auth.currentUser;
  }
  
  async updateProfile(name: string, password: string, email: string) {
    const user = this.auth.currentUser;
    console.log(user)
    if (user) {
      try {
        await updateEmail(user, email);
        await updatePassword(user, password);
        await updateProfile(user, {
          displayName: name
        });
        console.log('Perfil actualizado correctamente');
        console.log(user);
      } catch (error) {
        console.log('Error al actualizar el perfil:', error);
      }
    } else {
      console.log('No hay usuario autenticado');
    }
  }
  
  

}