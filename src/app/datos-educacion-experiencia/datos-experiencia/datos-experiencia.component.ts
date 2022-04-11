import { HttpClient } from '@angular/common/http';
import { Component,Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../service/token.service';
import { Experienciaservicios } from './datos-experiencia.service';

import { Experiencia } from './experiencia.models';

@Component({
  selector: 'app-datos-experiencia',
  templateUrl: './datos-experiencia.component.html',
  styleUrls: ['./datos-experiencia.component.css']
})
export class DatosExperienciaComponent implements OnInit {
  @Input() datos_experiencia:Experiencia[];
  @Input() indice:number;
  experiencia : Experiencia;
  roles: string[];
  isAdmin = false;
  mostrar = false;
  mostrar2=false;
  i:number;
  constructor(
    private experienciaService : Experienciaservicios,
    private router: Router,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) { }
  eliminar(id:number) {
    this.experienciaService.delete(id).subscribe(
    data => {
      this.toastr.success('Producto Eliminado', 'OK');
      this.cargarPersona();
    },error => {
    console.log("error"+error);
    }
    )
    }
  id(id:number = this.i) :number{
    this.experienciaService.detail(id).subscribe(
      data => {
        this.experiencia=data;
      },err => {
        console.log("error",err);
      }
    )
    return this.i=id;
  }
  ngOnInit(): void { 
    this.cargarPersona();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    }); 
  }
  cargarPersona():void {
    this.experienciaService.lista().subscribe(
      data => {
        this.datos_experiencia = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  Mostrar(){
    this.mostrar=false;
  }
  Mostrar2(){
    this.mostrar2=false;
  }



  onUpdate() : void {  
    this.experienciaService.update(this.i, this.experiencia).subscribe(
      data => {
        alert("Datos Actualizados");
        this.router.navigate(['/portafolio']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
        });
      }
    ); 
  }
  
  empresa :string="";
  puesto : string=""; 
  fecha_inicio:string="";
  fecha_final :string="";
  descripcion :string="";
  imagen : string ="";

  onCreate(): void {
    const experiencia = new Experiencia(this.i,this.empresa,this.puesto,this.fecha_inicio,this.fecha_final,this.descripcion,this.imagen);
    this.experienciaService.save(experiencia).subscribe(
      data => {
        alert('Experiencia  creada OK',); 
        this.router.navigate(['/portafolio']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
        });
      }
    );
  }

}
