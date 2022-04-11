import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { Tecnicas } from './habilidadesTecnicas.models';
import { HablidadaesTecnicasServices } from './habilidadesTecnicas.services';




  


@Component({
  selector: 'app-seccion-habilidades-tecnicas-blandas',
  templateUrl: './seccion-habilidades-tecnicas-blandas.component.html',
  styleUrls: ['./seccion-habilidades-tecnicas-blandas.component.css']
})
export class SeccionHabilidadesTecnicasBlandasComponent {
  aux:string;
  habilidad :Tecnicas[]= [];
  h : Tecnicas;
  roles: string[];
  isAdmin = false;
  hab :Tecnicas;
  mostrar=false;
  id:number;
  imagen:string ="";
constructor(
  private router: Router,
  private tokenService: TokenService,
  private habilidadService: HablidadaesTecnicasServices,
  private toastr: ToastrService

){}

eliminar(id:number) {
  this.habilidadService.delete(id).subscribe(
  data => {
    alert('Producto Eliminado, OK');
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
    const tecnicas = new Tecnicas(this.id,this.imagen);
    this.habilidadService.save(tecnicas).subscribe(
      data => {
        alert('Habilidad Tecnologica creada OK',); 
        this.router.navigate(['/portafolio']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
        });
      }
    );
  }
}
