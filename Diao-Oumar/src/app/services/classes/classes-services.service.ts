import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesServicesService {

  public host = "http://localhost:3000"; 

  constructor(private httpClint:HttpClient) { }

  public getClasses() {
    return this.httpClint.get(this.host + "/classes");
  }
}
