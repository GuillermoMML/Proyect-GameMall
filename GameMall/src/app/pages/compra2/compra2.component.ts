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
      name: ['', [Validators.required, Validators.minLength(5)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      addres: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern(/^\d{10}$/)],
      password: ['', Validators.required],
    })
  }

  get nameNoValido(){
    return this.miFormulario.get('name')?.invalid && this.miFormulario.get('name')?.touched
  }

  /*Arreglar que se cumpla el patron*/ 
  get dniNoValido(){
    return this.miFormulario.get('dni')?.invalid && this.miFormulario.get('dni')?.touched || this.miFormulario.get('dni')?.errors?.['pattern'];
  }
  clickSeguirComprando(){
    this.router.navigate(['/']);
  }
}
