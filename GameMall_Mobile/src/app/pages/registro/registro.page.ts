import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private firestore: Firestore) {}

  ngOnInit() {
  }

}
