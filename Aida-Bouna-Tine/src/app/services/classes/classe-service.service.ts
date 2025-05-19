import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

 export class ClasseServiceService {
   constructor( private httpClient:HttpClient) { }
   
   host="http://localhost:3000/"

   
   getClasses(){
    //  this.httpClient.get(this.host+"classes")
    return this.httpClient.get(this.host+ "/classes")
   }
}
