import { Injectable } from '@angular/core';
import { Transfer } from '../model/transfer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transferUrl: string;
  constructor(private http: HttpClient) {
    this.transferUrl = 'http://localhost:8080/virements';
  }
  public findAll(code: string): Observable<any> {
    return this.http.get(
      'http://localhost:8080/comptes/' + code + '/virements'
    );
  }

  public save(transfer: Transfer) {
    return this.http.post<Transfer>(this.transferUrl + '/save', transfer);
  }
  getPDF(invoiceId: number): Observable<Blob> {
    return this.http.get<Blob>(this.transferUrl + 'PDF/' + invoiceId, {
      responseType: 'blob' as 'json',
    });
  }
}
