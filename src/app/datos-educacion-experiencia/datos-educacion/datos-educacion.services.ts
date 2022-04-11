
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from './educacion.models';

@Injectable({
    providedIn: 'root'
  })
  export class Educacionservicios{ 


    DatosPersonaURL = 'https://naara1993.herokuapp.com/educacion/';

    constructor(private httpClient: HttpClient) { }


    public lista(): Observable<Educacion[]> {
        return this.httpClient.get<Educacion[]>(this.DatosPersonaURL + 'lista');
      }

      public detail(id: number): Observable<Educacion> {
        return this.httpClient.get<Educacion>(this.DatosPersonaURL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.DatosPersonaURL + `delete/${id}`);
      }

      public save(educacion: Educacion): Observable<any> {
        return this.httpClient.post<any>(this.DatosPersonaURL + 'crear', educacion);
      }
    
    
      public update(id: number, educacion: Educacion): Observable<any> {
        return this.httpClient.put<any>(this.DatosPersonaURL + `update/${id}`, educacion);
      }

    }




