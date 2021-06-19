import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recharge } from '../model/recharge';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RechargeService {
  private rechargeUrl: string;
  constructor(private http: HttpClient) {
    this.rechargeUrl = 'http://localhost:8080/recharges';
  }
  public findAll(code: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/comptes/' + code + '/recharges'
    );
  }
  public findAlll(): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(this.rechargeUrl);
  }

  public save(recharge: Recharge) {
    return this.http.post<Recharge>(this.rechargeUrl , recharge);
  }
}
