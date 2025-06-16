import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {
   host="http://localhost:3000"

  constructor(private httpClient:HttpClient) { }
    getMatieres(){
      return   this.httpClient.get(this.host+"/matieres")
    }

   
    storeMatieres(matiere :any){
      return   this.httpClient.post(this.host+"/matieres",matiere)
    }
    updateMatieres(id_matiere:any,matiere :any){
      return   this.httpClient.put(this.host+"/matieres/"+id_matiere,matiere)
    }
    deleteMatieres(id_matiere:any){
      return   this.httpClient.delete(this.host+"/matieres/"+id_matiere)
    }
  
  
}
