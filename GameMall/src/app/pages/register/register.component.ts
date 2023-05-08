import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Firestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  miFormulario!: FormGroup;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.?[a-zA-Z]{2,4}$/;

  constructor(private userService: UserService, private fb:FormBuilder, private router: Router, private firestore: Firestore, private dataService: DataService ){
    this.crearFormulario();
  }

  crearFormulario(){
    this.miFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repitePassword: ['', [Validators.required]],     
    })
  }

  get emailNoValido(){
    return this.miFormulario.get('email')?.invalid && this.miFormulario.get('email')?.touched && !this.emailPattern.test(this.miFormulario.get('email')?.value);
  }

  get nameNoValido(){
    return this.miFormulario.get('userName')?.invalid && this.miFormulario.get('userName')?.touched;
  }

  get passwordNoValido(){
    return this.miFormulario.get('password')?.invalid && this.miFormulario.get('password')?.touched;
  }

  get repeatePasswordNoValido(){
    return (this.miFormulario.get('password')?.value != this.miFormulario.get('repitePassword')?.value) && this.miFormulario.get('repitePassword')?.touched;
  }

  onSubmit(){
    console.log(this.miFormulario.value)
    this.dataService.saveFormData(this.miFormulario.value)
    this.userService.register(this.miFormulario.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
  
}
