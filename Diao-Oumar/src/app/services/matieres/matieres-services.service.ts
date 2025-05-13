import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MatieresServicesService {

  public math = "http://localhost:3000";

  constructor(private httpClint:HttpClient) { }

  public getMatieres () {
    return this.httpClint.get(this.math + "/matieres");
  }
}





// {
//   'code' : 'MAT101',
//   'nom' : 'Mathématiques',
//   'coefficient' : '5',
//   'enseignant' : 'M. Dupont'
// },
// {
//   'code' : 'HIS202',
//   'nom' : 'Histoire-Géographie',
//   'coefficient' : '6',
//   'enseignant' : 'Mme Martin'
// },
// {
//   'code' : 'PHY303',
//   'nom' : 'Physique-Chimie',
//   'coefficient' : '4',
//   'enseignant' : 'M. Bernard'
// },
// {
//   'code' : 'JAVA101',
//   'nom' : 'Programmation Java',
//   'coefficient' : '5',
//   'enseignant' : 'M. Sidybé'
// },
// {
//   'code' : 'WEB101',
//   'nom' : 'HTML & CSS',
//   'coefficient' : '4',
//   'enseignant' : 'M. Der'
// },
// {
//   'code' : 'PYT101',
//   'nom' : 'Python',
//   'coefficient' : '4',
//   'enseignant' : 'Mme Sarr'
// },
// {
//   'code' : 'LAR201',
//   'nom' : 'Laravel',
//   'coefficient' : '5',
//   'enseignant' : 'M. Ndiaye'
// },
// {
//   'code' : 'REA301',
//   'nom' : 'React JS',
//   'coefficient' : '3',
//   'enseignant' : 'Mme Ndiaye'
// },
// {
//   'code' : 'ANG302',
//   'nom' : 'Angular',
//   'coefficient' : '3',
//   'enseignant' : 'M. Sy'
// },
// {
//   'code' : 'SPB201',
//   'nom' : 'Sprinng Boot',
//   'coefficient' : '6',
//   'enseignant' : 'M. Sidybé'
// }