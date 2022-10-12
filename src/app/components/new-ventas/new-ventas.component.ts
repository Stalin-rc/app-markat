import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-ventas',
  templateUrl: './new-ventas.component.html',
  styleUrls: ['./new-ventas.component.css']
})
export class NewVentasComponent implements OnInit {

  id!:number;
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    this.reactiveForm();
  }

  reactiveForm(){
    this.myForm=this.formBuilder.group({
      nombre:[""]
    })
  }

}
