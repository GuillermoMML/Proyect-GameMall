import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';

import { BehaviorSubject } from 'rxjs';
import { Firestore, collection, where, query, CollectionReference, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

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

}
