import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-compra2',
  templateUrl: './compra2.component.html',
  styleUrls: ['./compra2.component.css']
})
export class Compra2Component {

  miFormulario!: FormGroup;

  constructor(private router: Router, private fb:FormBuilder) { 
   this.crearFormulario();

  }

  crearFormulario(){
    this.miFormulario = this.fb.group({
      name: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.minLength(9)]],
      country: ['', [Validators.required]],
      addres: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get nameNoValido(){
    return this.miFormulario.get('name')?.invalid && this.miFormulario.get('name')?.touched
  }

  /*Arreglar que se cumpla el patron*/ 
  get dniNoValido(){
    return this.miFormulario.get('dni')?.invalid && this.miFormulario.get('dni')?.touched;
  }

  get countryNoValido(){
    return this.miFormulario.get('country')?.invalid && this.miFormulario.get('country')?.touched ;
  }

  get addresNoValido(){
    return this.miFormulario.get('addres')?.invalid && this.miFormulario.get('addres')?.touched;
  }

  get phoneNoValido(){
    return this.miFormulario.get('phone')?.invalid && (this.miFormulario.get('phone')?.touched || this.miFormulario.get('phone')?.errors?.['pattern']);
  }

  get emailNoValido(){
    return this.miFormulario.get('email')?.invalid && (this.miFormulario.get('email')?.touched || this.miFormulario.get('email')?.errors?.['email']);
  }

  clickSeguirComprando(){
    this.router.navigate(['/']);
  }

  guardarDatos(){
    console.log(this.miFormulario)
  }
}
