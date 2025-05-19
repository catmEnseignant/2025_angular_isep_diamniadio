import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  host ="http://localhost:3000"

  constructor(private httpClient:HttpClient) { }

  // getClasse: il va nous retouner la liste des classes
  getClasses(){
    
    return this.httpClient.get(this.host +"/classes")
    
  }

}
