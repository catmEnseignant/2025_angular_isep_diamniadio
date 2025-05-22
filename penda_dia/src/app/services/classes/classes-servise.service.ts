import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiseService {
  host="http://localhost:3000";

  constructor(private httpClient: HttpClient){}

  getClass(){    
    return this.httpClient.get(this.host+"/classes")
  }

  storeClasse(classe:any){
    return this.httpClient.post(this.host+"/classes" , classe)

  }
}