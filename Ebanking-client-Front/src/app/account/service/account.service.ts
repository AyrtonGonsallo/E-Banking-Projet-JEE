import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountUrl: string;
  constructor(private http: HttpClient) {
    this.accountUrl = 'http://localhost:8080/comptes';
  }

  public findAccountNum(id: string): Observable<Account> {
    return this.http.get<Account>(this.accountUrl + '/' + id+'/total');
  }
  public findAccountId(id: string):  Observable<any> {
    return this.http.get(this.accountUrl + '?id=' + id);
  }
}
