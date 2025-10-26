import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { SharedState } from '../shared/shared.state';
import { share } from 'rxjs';
import { sharedReducer } from '../shared/shared.reducer';
import { User } from '../models/user.model';
import { UsersState } from '../users/state/users.state';
import { usersReducer } from '../users/state/users.reduser';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  users: UsersState
  router: RouterReducerState,
  shared: SharedState,
}

export const appReducer: ActionReducerMap<AppState> = {
  users: usersReducer,
  router: routerReducer,
  shared: sharedReducer,
};
