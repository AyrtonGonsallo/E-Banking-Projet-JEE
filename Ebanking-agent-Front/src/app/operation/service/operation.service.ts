import { Injectable } from '@angular/core';
import { Operation } from '../model/operation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  private operationUrl: string;
  constructor(private http: HttpClient) {
    this.operationUrl = 'http://localhost:8080/operations';
  }
  /*   public findAll(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.operationUrl + 's');
  } */
  public findOperations(code: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/comptes/' + code + '/operations'
    );
  }
  public save(operation: Operation) {
    return this.http.post<Operation>(this.operationUrl + '/save', operation);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.operationUrl}/del/${id}`);
  }
  getPDF(invoiceId: number): Observable<Blob> {
    return this.http.get<Blob>(this.operationUrl + 'PDF/' + invoiceId, {
      responseType: 'blob' as 'json',
    });
  }
}
