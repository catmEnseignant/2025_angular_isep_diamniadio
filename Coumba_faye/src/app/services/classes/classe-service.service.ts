import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {
  host="http://localhost:3000"

  constructor(private httpClient: HttpClient) { }
  
  storeClasse(classe :any){
    return this.httpClient.post(this.host+"/classes", classe)

  }

  getClasses(){
    return this.httpClient.get(this.host+"/classes")
    
  }
}
