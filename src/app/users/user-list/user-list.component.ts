import { Component, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import {
  selectSelectedUserId,
  selectShowForm,
  selectUsers,
} from '../state/users.selectors';
import { readUsers, selectUser } from '../state/users.actions';
import { AppState } from '../../store/app.state';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MatCardModule, AsyncPipe, UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  store: Store<AppState> = inject(Store);
  users$ = this.store.select(selectUsers);
  showForm$ = this.store.select(selectShowForm);
  selectedUserId$ = this.store.select(selectSelectedUserId);
  selectedUser$ = combineLatest([this.users$, this.selectedUserId$]).pipe(
    map(([users, selectedUserId]) => users.find((u) => u.id === selectedUserId)
    )
  );

  ngOnInit() {
    this.store.dispatch(readUsers());
  }
}
