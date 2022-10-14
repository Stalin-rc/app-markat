import { ActivatedRoute } from '@angular/router';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['Nombre_Apellido', 'Dni', 'Creditos', 'Total_gastado', 'Status_morosidad', 'Fecha_pago', 'accion'];
  dataSource = new MatTableDataSource<Cliente>();
  id!:number;
  constructor(private clienteService: ClienteService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getClientes();
    this.id=this.ActivatedRoute.snapshot.params["id"]; 

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe(
      (data: Cliente[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }

  deleteCliente(id: number) {
    this.clienteService.deleteCliente(id).subscribe({
      next: (data: Cliente) => {
        this.getClientes();
      },

      error: (e: any) => {
        console.log(e);
      }
    }
    )
  }

}
