import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  host ="http://localhost:3000"
  
    constructor(private httpClient:HttpClient) { }
  
    // getClasse: il va nous retouner la liste des classes
    getMatieres(){
      
      return this.httpClient.get(this.host +"/matieres")
      
    }
}
