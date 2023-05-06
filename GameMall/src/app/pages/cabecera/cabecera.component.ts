import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit{

  isLoggedIn?: boolean;
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggin().subscribe(valor => {
      this.isLoggedIn = valor;
    });
  }


  onSearchSubmit(){
    const searchInput = document.querySelector<HTMLInputElement>('#searchInput')?.value;
    console.log(searchInput)
    this.router.navigate(['/navegacion'], { queryParams: { item: JSON.stringify(searchInput) } });
  }
  
  onButtonClickLogin() {
    this.router.navigate(['/login']);
  }

  onButtonClickRegister() {
    this.router.navigate(['/register']);
  }
}
