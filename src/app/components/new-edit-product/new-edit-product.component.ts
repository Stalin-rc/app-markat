import { Producto } from './../../models/producto';
import { ProductosService } from './../../services/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-edit-product',
  templateUrl: './new-edit-product.component.html',
  styleUrls: ['./new-edit-product.component.css']
})
export class NewEditProductComponent implements OnInit {
  id!: number;
  myForm!: FormGroup;
  url!: string;
  constructor(private activated: ActivatedRoute, private formBuilder: FormBuilder, private productoService: ProductosService,
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
      marca: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      precio: ['',Validators.required],
      unidades: ['',Validators.required],
      url: ['',Validators.required]
    })
  }

  cargarFormulario() {
    if (this.id != undefined) {
      this.productoService.getProducto(this.id).subscribe(
        (data: Producto) => {
          this.myForm.get('nombre')?.setValue(data.nombre);
          this.myForm.get('marca')?.setValue(data.marca);
          this.myForm.get('descripcion')?.setValue(data.descripcion);
          this.myForm.get('precio')?.setValue(data.precio);
          this.myForm.get('unidades')?.setValue(data.stock);
          this.myForm.get('url')?.setValue(data.img);
          this.url = data.img;
        }
      )
    } else {
      this.url = "../../../assets/logo.png";
      this.id = 0;
    }
  }

  addProducto() {
    const producto: Producto = {
      id: this.id,
      nombre: this.myForm.get('nombre')?.value,
      marca: this.myForm.get('marca')?.value,
      descripcion: this.myForm.get('descripcion')?.value,
      img: this.myForm.get('url')?.value,
      precio: this.myForm.get('precio')?.value,
      stock: this.myForm.get('unidades')?.value
    }

    if (this.id == 0) {

      this.productoService.addProducto(producto).subscribe({
        next: (data: Producto) => {
          this.router.navigate(['dashboard/inventario']);
        },
        error: (e) => {
          console.log(e);
        }
      })
    } else {
      this.productoService.editProducto(producto).subscribe({
        next: (data: Producto) => {
          this.router.navigate(['dashboard/inventario']);
        },
        error: (e) => {
          console.log(e);
        }
      })
    }
  }
}
