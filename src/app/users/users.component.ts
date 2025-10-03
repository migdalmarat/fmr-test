import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-users',
  imports: [UserListComponent, UserDetailComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
