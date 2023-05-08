import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  miFormulario!: FormGroup;

  constructor(private userService: UserService, private fb:FormBuilder, private router: Router, private dataService: DataService) {
    this.crearFormulario();
  }

  crearFormulario(){
    this.miFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],   
    })
  }

  async onSubmit(){
    const email = this.miFormulario.get('email')?.value;
    const data = await this.dataService.getUsuarioByEmail(email)
    const username = data.name
    this.userService.login(this.miFormulario.value)
      .then(response => {
        console.log(response);
        this.userService.setLoggin(true);
        this.userService.setData(username);
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error));
  }
}
