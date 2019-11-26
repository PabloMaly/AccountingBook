import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Transaction } from './model/transaction';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AgileEngine Notebook demo';
  transaction: Transaction[] = [];

  constructor(
    protected txService: UserService
  ) {
  }

  ngOnInit() {
    this.txService.getUsers()
    .subscribe(
      data => { // Success
      console.log(data);
        this.transaction = data as Transaction[];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}