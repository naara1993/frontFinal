import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { proyectosRealizados } from './proyectosRealizados.models';
import { proyectosRealizadosService } from './proyectosRealizados.service';

@Component({
  selector: 'app-proyectos-realizados',
  templateUrl: './proyectos-realizados.component.html',
  styleUrls: ['./proyectos-realizados.component.css']
})
export class ProyectosRealizadosComponent implements OnInit {
  aux:string;
  habilidad :proyectosRealizados[]= [];
  h : proyectosRealizados;
  roles: string[];
  isAdmin = false;
  hab :proyectosRealizados;
  mostrar=false;
  id:number;
  nombreProyecto:string ="";
  descripcionProyecto:string="";
  constructor(


    private router: Router,
    private tokenService: TokenService,
    private proyectoService: proyectosRealizadosService,
    private toastr: ToastrService
  ) { }
  Salir(){
    this.mostrar=false;
  }
  cargarPersona():void {
    this.proyectoService.lista().subscribe(
      data => {
        this.habilidad = data;
      },
      err => {
        console.log(err);
      }
    );
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

 
  eliminar(id:number) {
    this.proyectoService.delete(id).subscribe(
    data => {
      alert(' Eliminado, OK');
      this.cargarPersona();
    },error => {
    console.log("error"+error);
    }
    )
    }
    onCreate(): void {
      const tecnicas = new  proyectosRealizados(this.id,this.nombreProyecto,this.descripcionProyecto);
      this.proyectoService.save(tecnicas).subscribe(
        data => {
          alert('Habilidad blanda creada OK',); 
          this.router.navigate(['/portafolio']);
        },
        err => {
         alert("error "+err);
        }
      );
    }
}
