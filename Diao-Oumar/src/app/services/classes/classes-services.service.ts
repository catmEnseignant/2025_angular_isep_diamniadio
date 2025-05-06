import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesServicesService {

  constructor() { }

  public getClasses() {
    let classes = [
      {
        'nom' : 'second',
        'niveau' : '23',
        'serie' : 'S2',
        'nombre' : '35'
      },
      {
        'nom' : 'terminal',
        'niveau' : '20',
        'serie' : 'L2',
        'nombre' : '45'
      },
      {
        'nom' : 'primiere',
        'niveau' : '21',
        'serie' : 'L2',
        'nombre' : '40'
      }
    ];
    return classes;
  }
}
