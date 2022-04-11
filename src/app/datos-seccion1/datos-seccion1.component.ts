
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { DataSeccion1 } from './dataSeccion1.services';
import { DatosSeccion1 } from './datos-seccion1.models';


@Component({
  selector: 'app-datos-seccion1',
  templateUrl: './datos-seccion1.component.html',
  styleUrls: ['./datos-seccion1.component.css']
})
export class DatosSeccion1Component  {
  mostrar : boolean = false;
  sobreMi :DatosSeccion1[]= [];
  sobre_mi :DatosSeccion1;
  roles: string[];
  isAdmin = false;
  router: any;
 

  constructor(    

    private tokenService: TokenService,
    private sobreMiService: DataSeccion1,
    private toastr: ToastrService

  ) { }


  cargarPersona():void {
    this.sobreMiService.lista().subscribe(
      data => {
        this.sobreMi = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.cargarPersona();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    }); 

    this.sobreMiService.detail(1).subscribe(
      data =>{
        this.sobre_mi=data;
      },err => {
        console.log("surgio un problema",err);
      }
    )  

  }


  onUpdate(): void {  
    this.cargarPersona();
    this.sobreMiService.update(1, this.sobre_mi).subscribe(
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

  Mostrar(){
    this.mostrar=false;
  }

}
