import { BodeguerosService } from './../../services/bodegueros.service';
import { Bodegueros } from './../../models/bodegueros';
import { VentasService } from './../../services/ventas.service';
import { Ventas } from './../../models/ventas';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  displayedColumns: string[] = ["cliente", "productos", "precioTotal","credito","fechaVenta","comprobante"];
  dataSource = new MatTableDataSource<Ventas>();
  id!: number;
  Bodegueros!: Bodegueros;

  constructor(private ventaService: VentasService,
              private snackbar: MatSnackBar,
              private router: Router,
              private activetedRoute: ActivatedRoute,
              private BodeguerosService: BodeguerosService) { }

  ngOnInit(): void {
    this.getVentas();
    this.id = this.activetedRoute.snapshot.params['id'];
    this.BodeguerosService.getBodeguero(this.id).subscribe(
      (data: Bodegueros) => {
        this.Bodegueros = data;
      }
    )
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
