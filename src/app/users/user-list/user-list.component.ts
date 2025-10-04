import { Component, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import { getShowForm, getUsers } from '../state/users.selector';
import { readUsers } from '../state/users.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MatCardModule, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> | null = null;
  showForm$: Observable<boolean> | null = null;
  store: Store<AppState> = inject(Store);

  ngOnInit() {
    this.store.dispatch(readUsers());
    this.users$ = this.store.select(getUsers);
    this.showForm$ = this.store.select(getShowForm);
  }

  onSelected(userName: number): void {}
}
