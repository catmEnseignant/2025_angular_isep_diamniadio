import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesServicesService {

  public host = "http://localhost:3000"; 

  constructor(private httpClint:HttpClient) { }

  public getClasses() {
    return this.httpClint.get(this.host + "/classes");
  }

  // methode pour ajouter des donnees avec (POST)
  public storeClasses(classe : any) {
    return this.httpClint.post(this.host + "/classes", classe);
  }

  public editClasse () {
    
  }
}
