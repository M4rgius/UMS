import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { faPencilAlt, faUserSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();
  faPen = faPencilAlt;
  faUser = faUserSlash;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.onSelectUser.emit(this.user);
  }
}
