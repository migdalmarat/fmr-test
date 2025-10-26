import { Component, inject, input, OnInit } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectSelectedUserId, selectUserByIdParams } from '../state/users.selectors';
import { selectUserId } from '../state/users.state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [AsyncPipe],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent  {
  store: Store<AppState> = inject(Store);
  // user = input.required<User | undefined>();

  constructor() {}

  user$ = this.store.select(selectUserByIdParams)


  
  
}
