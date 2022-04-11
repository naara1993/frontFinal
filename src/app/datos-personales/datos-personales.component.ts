
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { DatosPersona } from './datospersonales.models';
import { Datos_personales_servicios } from './datos_personales.services';



@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  



  mostrar = false;
  mostrar2=true;
  persona: DatosPersona[] = [];
  pers: DatosPersona;
  roles: string[];
  isAdmin = false;

  scroll(el:HTMLElement){
    el.scrollIntoView()
  }
 
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private personaService: Datos_personales_servicios,
    private toastr: ToastrService

  ) { }



  ngOnInit() {
    this.cargarPersona();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });    
    this.personaService.detail(1).subscribe(
      data =>{
        this.pers=data;
      },err => {
        console.log("surgio un problema",err);
      }
    )  
    }

    cargarPersona():void {
      this.personaService.lista().subscribe(
        data => {
          this.persona = data;
        },
        err => {
          console.log(err);
        }
      );
    }
  
    


onUpdate(): void {  
  this.cargarPersona();
  this.personaService.update(1, this.pers).subscribe(
    data => {
      alert("Datos Actualizados");
      this.router.navigate(['/portafolio']);
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
      });
    },
  );

 
}

Mostrar(){
    this.mostrar=false;
    this.mostrar2=true;
}



}







