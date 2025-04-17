import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Candidates } from '../models/candidates';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  baseUrl = environment.apiUrl;  
  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/Candidates/upload`, formData);
  }

  getCandidates(): Observable<Candidates[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Candidates/Get-All`).pipe(
      map((response: any) => {
        return Array.isArray(response) ? response : [];
      })
    );
  }
 

  

  

  // updateCandidate(id: number, candidate: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, candidate);
  // }

  // deleteCandidate(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}
