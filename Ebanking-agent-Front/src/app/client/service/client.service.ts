import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientUrl: string;
  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/clients';
  }
  public findAll(code: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/agences/' + code + '/clients'
    );
    
  }
  public findClient(code: String): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl + '/' + code);
  }
  public findClient2(code: String): Observable<Client> {
    return this.http.get<Client>(this.clientUrl + '/' + code);
  }

  public save(client: Client) {
    return this.http.post<Client>(this.clientUrl + '/save', client);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.clientUrl}/delete/${id}`);
  }
}
