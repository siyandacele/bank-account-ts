import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from './../models/accounts.models';
import { Observable } from 'rxjs';

@Injectable()
export class AccountsService {

  private BASE_URL = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Accounts[]> {
    return this.http.get<Accounts[]>(this.BASE_URL + '/accounts');
  }
}
