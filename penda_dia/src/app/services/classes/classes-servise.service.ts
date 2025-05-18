import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiseService {
  host="http://localhost:3000";

  constructor(private httpClient: HttpClient){}

  getClass(){
    this.httpClient.get(this.host+"/classes")
    
    return this.httpClient.get(this.host+"/classes")

 }
}