// profile.page.ts
import { Component } from '@angular/core';
import { UserService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  email: string = '';
  password: string = '';

  constructor(private afAuth: UserService) {}

  ionViewWillEnter() {
    const user = this.afAuth.getCurrentUser();
    console.log(user)
    if (user) {
      this.email = user.email || '';
    }
  }

  updateProfile() {
    const user = this.afAuth.getCurrentUser();
    if (user) {
      this.afAuth.updateProfile(this.email, this.password)
    }
  }
}
