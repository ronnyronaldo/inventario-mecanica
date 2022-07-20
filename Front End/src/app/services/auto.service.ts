import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auto } from '../models/auto.model';

const baseUrl = 'http://localhost:8080/api/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Auto[]> {
    return this.http.get<Auto[]>(baseUrl);
  }

  get(id: any): Observable<Auto> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByPlaca(placa: any): Observable<Auto[]> {
    return this.http.get<Auto[]>(`${baseUrl}?placa=${placa}`);
  }
}
