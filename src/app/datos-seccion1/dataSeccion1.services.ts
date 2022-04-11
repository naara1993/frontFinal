
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosSeccion1 } from './datos-seccion1.models';

@Injectable({
  providedIn: 'root'
})
export class DataSeccion1{

  URL = 'https://naara1993.herokuapp.com/sobreMi/';



  constructor(private httpClient: HttpClient) { }


    public lista(): Observable<DatosSeccion1[]> {
        return this.httpClient.get<DatosSeccion1[]>(this.URL + 'lista');
      }

      public detail(id: number): Observable<DatosSeccion1> {
        return this.httpClient.get<DatosSeccion1>(this.URL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + `delete/${id}`);
      }

      public save(persona: DatosSeccion1): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'crear', persona);
      }
    
    
      public update(id: number, persona: DatosSeccion1): Observable<any> {
        return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
      }


}
