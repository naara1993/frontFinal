

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosPersona } from './datospersonales.models';




@Injectable({
    providedIn: 'root'
  })
export class Datos_personales_servicios{ 


    DatosPersonaURL = 'https://benjamin2010.herokuapp.com/persona/';

    constructor(private httpClient: HttpClient) { }


    public lista(): Observable<DatosPersona[]> {
        return this.httpClient.get<DatosPersona[]>(this.DatosPersonaURL + 'lista');
      }

      public detail(id: number): Observable<DatosPersona> {
        return this.httpClient.get<DatosPersona>(this.DatosPersonaURL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.DatosPersonaURL + `delete/${id}`);
      }

      public save(persona: DatosPersona): Observable<any> {
        return this.httpClient.post<any>(this.DatosPersonaURL + 'crear', persona);
      }
    
    
      public update(id: number, persona: DatosPersona): Observable<any> {
        return this.httpClient.put<any>(this.DatosPersonaURL + `update/${id}`, persona);
      }

    }


