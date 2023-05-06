import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(private auth: Auth) { }

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
}
