

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnicas } from './habilidadesTecnicas.models';






@Injectable({
    providedIn: 'root'
  })
export class HablidadaesTecnicasServices{ 


    HabilidadesTecnicasURL = 'https://benjamin2010.herokuapp.com/tecnicas/';

    constructor(private httpClient: HttpClient) { }


    public lista(): Observable<Tecnicas[]> {
        return this.httpClient.get<Tecnicas[]>(this.HabilidadesTecnicasURL + 'lista');
      }

      public detail(id: number): Observable<Tecnicas> {
        return this.httpClient.get<Tecnicas>(this.HabilidadesTecnicasURL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.HabilidadesTecnicasURL + `delete/${id}`);
      }

      public save(persona: Tecnicas): Observable<any> {
        return this.httpClient.post<any>(this.HabilidadesTecnicasURL + 'crear', persona);
      }
    
    
      public update(id: number, persona: Tecnicas): Observable<any> {
        return this.httpClient.put<any>(this.HabilidadesTecnicasURL + `update/${id}`, persona);
      }

    }