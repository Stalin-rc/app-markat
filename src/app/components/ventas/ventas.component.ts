import { VentasService } from './../../services/ventas.service';
import { Ventas } from './../../models/ventas';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  displayedColumns: string[] = ["cliente", "productos", "precioTotal","credito","fechaVenta","comprobante"];
  dataSource = new MatTableDataSource<Ventas>();

  constructor(private ventaService: VentasService,
              private snackbar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.getVentas();
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getVentas(): void{
    this.ventaService.getVentas().subscribe(
      (data:Ventas[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }

 

}
