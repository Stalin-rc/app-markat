import { Ventas } from './../models/ventas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  getVentas(){
    return this.http.get<Ventas[]>("http://localhost:3000/Ventas");
  }

  deleteVentas(id: number){
    return this.http.delete("http://localhost:3000/Ventas"+"/"+id.toString());
  }

}
