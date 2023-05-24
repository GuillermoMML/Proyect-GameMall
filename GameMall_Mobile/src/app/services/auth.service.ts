import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail,updatePassword} from '@angular/fire/auth';
import { getAuth, updateProfile } from "firebase/auth"; 
import { BehaviorSubject } from 'rxjs';
import { Firestore, collection, where, query, CollectionReference, getDocs } from '@angular/fire/firestore';

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

  async deleteUser() {
    try {
      const user = this.auth.currentUser;

      if (user) {
        await user.delete();
        console.log('Usuario eliminado correctamente');
      } else {
        console.error('No se encontró ningún usuario autenticado');
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }

  newEmail(newEmail: string): Promise<void | null> {
    const user = this.auth.currentUser;   
    if (user) {
      updateEmail(user,newEmail);

    }
    return Promise.resolve(null);
  }

  newPassword(newPassword: string): Promise<void | null> {
    const user = this.auth.currentUser;   
    if (user) {
      updatePassword(user,newPassword);
    }
    return Promise.resolve(null);
  }

  async updateProfile(email: string, password: string) {
    try {
      let user = this.auth.currentUser;
      if(user){
        updateEmail(user,email);
      }
      if(user){
        updatePassword(user,password);
      }
      console.log("Se actualizo")

    } catch (error) {
      console.error('Error al actualizar el correo y la contraseña:', error);
    }
  }
  
  
  

}