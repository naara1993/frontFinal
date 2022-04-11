

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { proyectosRealizados } from './proyectosRealizados.models';





@Injectable({
    providedIn: 'root'
  })
export class proyectosRealizadosService{ 


    DatosPersonaURL = 'https://naara1993.herokuapp.com/proyectos/';

    constructor(private httpClient: HttpClient) { }



    public lista(): Observable<proyectosRealizados[]> {
        return this.httpClient.get<proyectosRealizados[]>(this.DatosPersonaURL + 'lista');
      }

      public detail(id: number): Observable<proyectosRealizados> {
        return this.httpClient.get<proyectosRealizados>(this.DatosPersonaURL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.DatosPersonaURL + `delete/${id}`);
      }

      public save(persona: proyectosRealizados): Observable<any> {
        return this.httpClient.post<any>(this.DatosPersonaURL + 'crear', persona);
      }
    
    
      public update(id: number, persona: proyectosRealizados): Observable<any> {
        return this.httpClient.put<any>(this.DatosPersonaURL + `update/${id}`, persona);
      }

    }