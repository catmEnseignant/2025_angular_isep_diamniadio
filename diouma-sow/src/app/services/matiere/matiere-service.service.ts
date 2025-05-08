import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {
  host="http:/localhost:3000"

  constructor(private httpClient: HttpClient) { }
  getMatieres(){
   let matiere = [ 
   ]
   return this.httpClient.get(this.host+"/matieres")
    } 
  }
