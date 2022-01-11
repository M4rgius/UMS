import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Marcello',
      lastname: 'Bianchi',
      email: 'mariorossi@gmail.com',
      fiscalcode: 'SADCACC8464353',
      province: 'Torino',
      phone: '3554581328',
      age: 43,
    },
    {
      id: 2,
      name: 'Mario',
      lastname: 'Rossi',
      email: 'mariorossi@gmail.com',
      fiscalcode: 'SADCACC8464353',
      province: 'Torino',
      phone: '3554581328',
      age: 43,
    },
    {
      id: 3,
      name: 'Marcello',
      lastname: 'Rossi',
      email: 'mariorossi@gmail.com',
      fiscalcode: 'SADCACC8464353',
      province: 'Torino',
      phone: '3554581328',
      age: 43,
    },
    {
      id: 4,
      name: 'Marcello',
      lastname: 'Rossi',
      email: 'mariorossi@gmail.com',
      fiscalcode: 'SADCACC8464353',
      province: 'Torino',
      phone: '3554581328',
      age: 43,
    },
  ];
  getUsers() {
    return this.users;
  }
  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id == user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }
  createUser(user: UserInterface) {
    this.users.splice(0, 0, user);
  }
}
