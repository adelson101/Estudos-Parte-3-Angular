import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { pensamento } from './Interface/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API: string = 'http://localhost:3000/pensamentos';

  constructor( private http: HttpClient ) {}

  listar(): Observable<pensamento[]> {
    return this.http.get<pensamento[]>(this.API);
  }

  criar(pensamento: pensamento): Observable<pensamento> {
    return this.http.post<pensamento>(this.API, pensamento)
  }

  editar(pensamento: pensamento): Observable<pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<pensamento>(url,pensamento);
  }

  excluir(id: string): Observable<pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<pensamento>(url)
  }

  buscarPorId(id: string): Observable<pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<pensamento>(url)
  }

}
