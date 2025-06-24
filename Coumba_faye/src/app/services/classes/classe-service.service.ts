import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {
  host="http://localhost:3000"

  constructor(private httpClient: HttpClient) { }
  getClasses(){
    return this.httpClient.get(this.host+"/classes")
    
  }
  
  storeClasse(classe :any){
    return this.httpClient.post(this.host+"/classes", classe)

  }
  updateClasse(id_classe: any, classe: any){
    return this.httpClient.put(this.host+"/classes/"+id_classe, classe)

  }
   deleteClasse(id_classe :any){
    return this.httpClient.delete(this.host+"/classes"+id_classe)

  }

}
