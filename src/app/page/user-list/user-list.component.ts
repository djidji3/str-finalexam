import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  nameFilter: string  = "";


  constructor(
    private userService: UserService,
  ) { }

  deleteItem(user: User){
    this.userService.delete(user);
  }

  ngOnInit(): void {
  }

}
