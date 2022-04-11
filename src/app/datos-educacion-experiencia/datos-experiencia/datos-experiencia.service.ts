import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia.models';


@Injectable({
    providedIn: 'root'
  })
  export class Experienciaservicios{ 


    DatosPersonaURL = 'https://naara1993.herokuapp.com/experiencia/';

    constructor(private httpClient: HttpClient) { }


    public lista(): Observable<Experiencia[]> {
        return this.httpClient.get<Experiencia[]>(this.DatosPersonaURL + 'lista');
      }

      public detail(id: number): Observable<Experiencia> {
        return this.httpClient.get<Experiencia>(this.DatosPersonaURL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.DatosPersonaURL + `delete/${id}`);
      }

      public save(experiencia: Experiencia): Observable<any> {
        return this.httpClient.post<any>(this.DatosPersonaURL + 'crear', experiencia);
      }
    
    
      public update(id: number, experiencia: Experiencia): Observable<any> {
        return this.httpClient.put<any>(this.DatosPersonaURL + `update/${id}`, experiencia);
      }

    }




