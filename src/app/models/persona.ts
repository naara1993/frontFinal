export class Persona{
  id?: number;
  nombreCompleto:string;
  domicilio:string;
  profesion:string;

  constructor(nombreCompleto:string,domicilio: string,profesion: string) {
       this.nombreCompleto= nombreCompleto;
       this.domicilio= domicilio;
       this.profesion= profesion;
  }
}