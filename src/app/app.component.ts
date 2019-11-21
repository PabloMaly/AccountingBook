import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './model/user';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AgileEngine Notebook demo';
  users: User[] = [];

  constructor(
    protected txService: UserService
  ) {
  }

  ngOnInit() {
    this.txService.getUser()
    .subscribe(
      data => { // Success
        this.users = data as User[];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}