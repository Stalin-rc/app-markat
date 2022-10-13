import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-new-edit-cliente',
  templateUrl: './new-edit-cliente.component.html',
  styleUrls: ['./new-edit-cliente.component.css']
})
export class NewEditClienteComponent implements OnInit {

  id!: number;
  myForm!: FormGroup;
  url!: string;
  constructor(private activated: ActivatedRoute, private formBuilder: FormBuilder, private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    this.reactiveForm();
    this.cargarFormulario();
    console.log(this.id);
  }

  reactiveForm() {
    this.myForm = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      dni: ['',[Validators.required]],
      creditos: ['',[Validators.required]],
      total_gastado: ['',Validators.required],
      status_morosidad: ['',Validators.required],
      fecha_pago: ['',Validators.required]
    })
  }

  cargarFormulario() {
    if (this.id != undefined) {
      this.clienteService.getclente(this.id).subscribe(
        (data: Cliente) => {
          this.myForm.get('nombre')?.setValue(data.nombre);
          this.myForm.get('DNI')?.setValue(data.dni);
          this.myForm.get('creditos')?.setValue(data.creditos);
          this.myForm.get('total_gastado')?.setValue(data.total_gastado);
          this.myForm.get('status_morosidad')?.setValue(data.status_morosidad);
          this.myForm.get('fecha_pago')?.setValue(data.fecha_pago);
    
        }
      )
    } else {
      this.id = 0;
    }
  }

  addCliente() {
    const cliente: Cliente = {
      id: this.id,
      nombre: this.myForm.get('nombre')?.value,
      dni: this.myForm.get('DNI')?.value,
      creditos: this.myForm.get('creditos')?.value,
      total_gastado: this.myForm.get('total_gastado')?.value,
      status_morosidad: this.myForm.get('status_morosidad')?.value,
      fecha_pago: this.myForm.get('fecha_pago')?.value
    }

    if (this.id == 0) {

      this.clienteService.addCliente(cliente).subscribe({
        next: (data: Cliente) => {
          this.router.navigate(['dashboard/cliente']);
        },
        error: (e: any) => {
          console.log(e);
        }
      })
    } else {
      this.clienteService.editCliente(cliente).subscribe({
        next: (data: Cliente) => {
          this.router.navigate(['dashboard/cliente']);
        },
        error: (e: any) => {
          console.log(e);
        }
      })
    }
  }

}
