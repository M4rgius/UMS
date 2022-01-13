import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  user: UserInterface | undefined;
  public title = 'User detail';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = Number(param.id); // '12'
      const user = this.userService.getUser(id);
      if (user) {
        this.user = user;
      }
    });
  }

  backToUsers() {
    this.router.navigate(['users']);
  }
}
