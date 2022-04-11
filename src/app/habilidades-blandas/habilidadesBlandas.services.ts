

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HabilidadesBlandas } from './habilidadesBlandas.models';







@Injectable({
    providedIn: 'root'
  })
export class HablidadaesBlandasServices{ 


    HabilidadesTecnicasURL = 'https://naara1993.herokuapp.com/blandas/';

    constructor(private httpClient: HttpClient) { }


    public lista(): Observable<HabilidadesBlandas[]> {
        return this.httpClient.get<HabilidadesBlandas[]>(this.HabilidadesTecnicasURL + 'lista');
      }

      public detail(id: number): Observable<HabilidadesBlandas> {
        return this.httpClient.get<HabilidadesBlandas>(this.HabilidadesTecnicasURL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.HabilidadesTecnicasURL + `delete/${id}`);
      }

      public save(persona: HabilidadesBlandas): Observable<any> {
        return this.httpClient.post<any>(this.HabilidadesTecnicasURL + 'crear', persona);
      }
    
    
      public update(id: number, persona: HabilidadesBlandas): Observable<any> {
        return this.httpClient.put<any>(this.HabilidadesTecnicasURL + `update/${id}`, persona);
      }

    }