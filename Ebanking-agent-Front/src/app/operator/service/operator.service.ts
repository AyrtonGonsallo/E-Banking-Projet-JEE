import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operator } from '../model/operator';

@Injectable({
  providedIn: 'root',
})
export class OperatorService {
  private operatorUrl: string;
  constructor(private http: HttpClient) {
    this.operatorUrl = 'http://localhost:8080/operateurs';
  }
  public findAll(): Observable<any> {
    return this.http.get(this.operatorUrl);
  }

  public save(operator: Operator) {
    return this.http.post<Operator>(this.operatorUrl + '/save', operator);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.operatorUrl}/delete/${id}`);
  }
}
