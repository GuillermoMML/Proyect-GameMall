import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-compra2',
  templateUrl: './compra2.component.html',
  styleUrls: ['./compra2.component.css']
})
export class Compra2Component implements OnInit{
  constructor(private dataService: DataService){}

  ngOnInit(): void {

    console.log('Me he ejecutado con exito xdd');
    this.dataService.getBuscados().subscribe(x =>{
      console.log(x);
    })

    
  }

  
}
