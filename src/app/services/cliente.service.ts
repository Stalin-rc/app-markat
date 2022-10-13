import { Cliente } from './../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<Cliente[]>('http://localhost:3000/Cliente');
  }

  getclente(id: number) {
    return this.http.get<Cliente>('http://localhost:3000/Cliente/' + id);
  }


  deleteCliente(id: number) {
    return this.http.delete<Cliente>('http://localhost:3000/Cliente/' + id);
  }

  addCliente(cliente: Cliente) {
    return this.http.post<Cliente>('http://localhost:3000/Cliente', cliente);
  }

  editCliente(cliente: Cliente) {
    return this.http.put<Cliente>('http://localhost:3000/Cliente/'+cliente.id, cliente);
  }
}
