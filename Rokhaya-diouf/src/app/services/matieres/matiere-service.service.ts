import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor(private httpClient:HttpClient) { }

  host="http://localhost:3000/"

  getMatieres(){

    return this.httpClient.get(this.host+ "/matieres")
//observable  reponse au niveau du serveur
  }

}
