import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-seccion-contenedor',
  templateUrl: './seccion-contenedor.component.html',
  styleUrls: ['./seccion-contenedor.component.css']
})
export class SeccionContenedorComponent implements OnInit  {
  constructor(private tokenService: TokenService,private router: Router) { 
    
  }


  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
      this.router.navigate(['/login']);
    }
  }

 
  
  isLogged = false;

}
