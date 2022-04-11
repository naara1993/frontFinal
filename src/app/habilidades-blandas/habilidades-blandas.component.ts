import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { HabilidadesBlandas } from './habilidadesBlandas.models';
import { HablidadaesBlandasServices } from './habilidadesBlandas.services';

@Component({
  selector: 'app-habilidades-blandas',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css']
})
export class HabilidadesBlandasComponent implements OnInit {


  aux:string;
  habilidad :HabilidadesBlandas[]= [];
  h : HabilidadesBlandas;
  roles: string[];
  isAdmin = false;
  hab :HabilidadesBlandas;
  mostrar=false;
  id:number;
  imagen:string ="";
  nombre:string="";

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private habilidadService:  HablidadaesBlandasServices,
    private toastr: ToastrService
  ) { }

  eliminar(id:number) {
    this.habilidadService.delete(id).subscribe(
    data => {
      alert(' Eliminado, OK');
      this.cargarPersona();
    },error => {
    console.log("error"+error);
    }
    )
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
    this.habilidadService.lista().subscribe(
      data => {
        this.habilidad = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  Salir(){
    this.mostrar=false;
  }
  onCreate(): void {
    const tecnicas = new  HabilidadesBlandas(this.id,this.imagen,this.nombre);
    this.habilidadService.save(tecnicas).subscribe(
      data => {
        alert('Habilidad blanda creada OK',); 
        this.router.navigate(['/portafolio']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
        });
      }
    );
  }

}
