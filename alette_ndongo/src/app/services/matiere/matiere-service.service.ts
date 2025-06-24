import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {
  host="http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  
  storeMatieres(matieres : any){
    return this.httpClient.post(this.host+"/matiere", matieres)

  }
  getMatieres(){
    
   return this.httpClient.get(this.host+"/matieres")
    } 
  }
