import { BodeguerosService } from '../../services/stores/bodegueros.service';
import { Bodegueros } from './../../models/bodegueros';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/services/clients/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['id','dni','nombre','apellido'];
  dataSource = new MatTableDataSource<Cliente>();
  id!:number;

  constructor(private clienteService: ClienteService, private ActivatedRoute: ActivatedRoute, 
    private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getClientes();
    this.id = this.activetedRoute.snapshot.params['id'];
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

  /* 
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
  }*/

}
