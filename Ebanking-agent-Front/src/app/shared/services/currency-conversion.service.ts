import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RateResponse } from '../models/rate-response';
import { Currency } from '../models/currency';
export const InterceptorSkip = 'X-Skip-Interceptor';
export const InterceptorSkipHeader = new HttpHeaders({
  'X-Skip-Interceptor': '',
});

@Injectable({
  providedIn: 'root',
})
export class CurrencyConversionService {
  private rateUrl: string;
  endpoint = 'convert';
  access_key = 'LQnSZVtTjHfzAbAaxORLygg9';
  baseURL = 'https://www1.oanda.com/rates/api/v2/rates/spot.json';

  constructor(private http: HttpClient) {}
  getRate(base: string, to: string): Observable<RateResponse> {
    return this.http.get<RateResponse>(
      this.baseURL +
        '?api_key=' +
        this.access_key +
        '&base=' +
        base +
        '&quote=' +
        to,
      {
        headers: InterceptorSkipHeader,
      }
    );
  }
  public findAllCurrencies(): Observable<any> {
    return this.http.get('http://localhost:8080/devises');
  }
}
