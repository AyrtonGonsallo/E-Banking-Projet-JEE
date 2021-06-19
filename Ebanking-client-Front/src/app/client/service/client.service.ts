import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/account/model/account';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';
import { Operator } from 'src/app/shared/models/operator';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientUrl: string;
  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/client';
  }

  public findClientAccounts(id: string): Observable<any> {
    return this.http.get(this.clientUrl + '/' + id + '/comptes');
  }

  public findOperators(): Observable<any> {
    return this.http.get('http://localhost:8080/operateurs');
  }
}
