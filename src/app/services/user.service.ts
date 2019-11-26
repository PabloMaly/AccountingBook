import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: Observable<any>;

  constructor(private  httpClient:  HttpClient) {}

    getUsers() {
        return this.httpClient.get<Transaction[]>('http://localhost:3000')
    }
}
