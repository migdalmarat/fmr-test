import { Component, inject, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Store } from '@ngrx/store';
import { getShowForm, getUsers } from './state/users.selector';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { readUsers, showForm } from './state/users.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [UserListComponent, UserDetailComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  // users$: Observable<User[]> | null = null;
  // showForm$: Observable<boolean> | null = null;
  // store: Store = inject(Store);
  // router: Router = inject(Router);
  // ngOnInit() {
  //   this.users$ = this.store.select(getUsers);
  //   this.showForm$ = this.store.select(getShowForm);
  //   this.store.dispatch(readUsers());
  // }
  // showCreateForm() {
  //   this.router.navigateByUrl('courses?edit=false');
  //   this.store.dispatch(showForm({ value: true }));
  // }
}
