import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuario } from '../../../models/nuevo-usuario';
import { AuthService } from '../../../service/auth-service';
import { TokenService } from '../../../service/token.service';
@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {



  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;

  private readonly newProperty = this;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }
  expresion:any;
  onRegister(): void {

    if(this.nombre.length>=40 ){
      alert("Solo hasta 40 caracteres ");
    }else   if(this.nombre.length<5){
    alert("ingrese mas de 5 caracteres en el nombre");
    this.nombre="";      
    }

    if(this.nombreUsuario.length<5){
      alert("el nombre de usuario debe contener mas de 5 caracteres en el nombre");
      this.nombreUsuario="";
    }

    
    
   this.expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

if (!this.expresion.test(this.email)){
alert("error en el formato del correo");
this.email="";
}
  
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      _data => {
        this.toastr.success('Cuenta Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
          
        });
        alert(this.errMsj);

      }
    );
  }


   

}
