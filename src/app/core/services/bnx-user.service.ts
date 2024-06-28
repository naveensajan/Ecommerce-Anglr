import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BnxUserService {

  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  signup(user: any) {
    return this.http.post(this.baseUrl, user);
  }

  login(email: string, password: string) {
    return this.http.get(`${this.baseUrl}?email=${email}&password=${password}`);
  }
}