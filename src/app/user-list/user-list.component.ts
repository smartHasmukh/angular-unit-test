import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from './user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  flag = false;
  userList: UserModel;
  enableFlag = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserList();  
  }

  getUserList() {
    this.userService.getUserApi().subscribe((user: UserModel) => {
      this.userList = user['userList'];
      this.flag = true;
      this.enableFlag = true;
      console.log(this.userList);
    });
  }

  get enableButtons() {
    return this.enableFlag;
  }
  clickEventHandler() {
    this.flag = false;
  }
}
