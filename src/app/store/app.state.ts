import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { SharedState } from '../shared/shared.state';
import { share } from 'rxjs';
import { sharedReducer } from '../shared/shared.reducer';
import { User } from '../models/user.model';
import { UsersState } from '../users/state/users.state';
import { usersReducer } from '../users/state/users.reduser';

export interface AppState {
  users: UsersState
  router: RouterReducerState,
  shared: SharedState,
}

export const appReducer = {
  users: usersReducer,
  router: routerReducer,
  shared: sharedReducer,
};
