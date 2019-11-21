import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from '../model/transaction';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: Observable<any>;

  constructor(private  httpClient:  HttpClient) {}

  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000').pipe(
      map(users => {       
        users.map(user => user.transactions.sort((tx1:Transaction, tx2:Transaction) => {
          return (new Date(tx2.date)).getTime() - (new Date(tx1.date).getTime())
        }))
        return users;
      }
    ))
  }
}
