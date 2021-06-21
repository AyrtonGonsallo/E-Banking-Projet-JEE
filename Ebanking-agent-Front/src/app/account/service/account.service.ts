import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountUrl: string;
  constructor(private http: HttpClient) {
    this.accountUrl = 'http://localhost:8080/comptes';
  }
  /*   public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl + 's');
  } */
  public findAll(code: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/client/' + code + '/comptes'
    );
  }
  public findCodeDevise(code: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/comptes/search/up6?u='+code
    );
  }
  public findAccount(code: string): Observable<any> {
    return this.http.get(this.accountUrl + '/' + code);
  }

  public save(account: Account) {
    return this.http.post<Account>(this.accountUrl , account);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.accountUrl}/delete/${id}`);
  }

  getPDF(invoiceId: number): Observable<Blob> {
    return this.http.get<Blob>(
      'http://localhost:8080/contratPDF/' + invoiceId,
      {
        responseType: 'blob' as 'json',
      }
    );
  }
}
