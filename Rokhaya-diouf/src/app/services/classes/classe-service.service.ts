import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {
  constructor(private httpClient:HttpClient) { }

  host="http://localhost:3000"

  getClasses(){
    return this.httpClient.get(this.host+ "/classes")
//observable  reponse au niveau du serveur
  }
    storeClasse(classe:any){
    return this.httpClient.post(this.host+ "/classes", classe)

  }
}
