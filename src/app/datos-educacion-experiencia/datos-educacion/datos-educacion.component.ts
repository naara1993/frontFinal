import { Component,Input, OnInit } from '@angular/core';
import { Educacion } from './educacion.models';
import { Educacionservicios } from './datos-educacion.services';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-datos-educacion',
  templateUrl: './datos-educacion.component.html',
  styleUrls: ['./datos-educacion.component.css']
})

export class DatosEducacionComponent implements OnInit {

 datos_educacion:Educacion[];
 educacion : Educacion;
  roles: string[];
  isAdmin = false;
  mostrar = false;
  i:number;
eliminar(id:number) {
this.educacionService.delete(id).subscribe(
data => {
  this.toastr.success('Producto Eliminado', 'OK');
  this.cargarPersona();
},error => {
console.log("error"+error);
}
)
}


  constructor(
 private educacionService : Educacionservicios,
 private router: Router,
 private tokenService: TokenService,
 private toastr: ToastrService

  ) { }
  id(id:number = this.i) :number{
    this.educacionService.detail(id).subscribe(
      data => {
        this.educacion=data;
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
  this.educacionService.lista().subscribe(
    data => {
      this.datos_educacion = data;
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
  this.educacionService.update(this.i, this.educacion).subscribe(
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

imagen : string ="";
escuela : string="";
titulo :string="";
fecha_inicio:string="";
fecha_final :string="";
mostrar2=false;
onCreate(): void {
  const educacion = new Educacion(this.i,this.escuela,this.titulo,this.fecha_inicio,this.fecha_final,this.imagen);
  this.educacionService.save(educacion).subscribe(
    data => {
      alert('Educacion  creada OK',); 
      this.router.navigate(['/portafolio']);
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
      });
    }
  );
}

}

