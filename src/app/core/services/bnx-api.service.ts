import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BnxApiService {
  private apiUrl = 'http://localhost:3000/products'; 

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
