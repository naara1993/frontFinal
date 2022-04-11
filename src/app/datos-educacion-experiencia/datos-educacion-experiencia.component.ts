import { Component, Injectable, OnInit } from '@angular/core';

import { Educacion } from './datos-educacion/educacion.models';

import { Experiencia } from './datos-experiencia/experiencia.models';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';
import { Educacionservicios } from './datos-educacion/datos-educacion.services';
import { ToastrService } from 'ngx-toastr';
import { Experienciaservicios } from './datos-experiencia/datos-experiencia.service';

 


@Component({
  selector: 'app-datos-educacion-experiencia',
  templateUrl: './datos-educacion-experiencia.component.html',
  styleUrls: ['./datos-educacion-experiencia.component.css']
})

  export class DatosEducacionExperienciaComponent implements OnInit {


index:number;
educacion:Educacion[]=[];
experiencia:Experiencia[]=[];
roles: string[];
isAdmin = false;
  constructor( 
    private router: Router,
    private tokenService: TokenService,
    private educacionService: Educacionservicios,
    private experienciaService:Experienciaservicios,
    private toastr: ToastrService
  ){}

  
 
  ngOnInit():void {
    this.cargarPersona();
    this.cargarPersona2();
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
        this.educacion = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarPersona2():void {
    this.experienciaService.lista().subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        console.log(err);
      }
    );
  }


  }

