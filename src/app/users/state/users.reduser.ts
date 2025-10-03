import { createReducer, on } from '@ngrx/store';
import { initialState } from './users.state';
import { userAdapter } from './users.state';
import {
  createUserSuccess,
  deleteUserSuccess,
  readUsersSuccess,
  updateUserSuccess,
} from './users.actions';

export const usersReducer = createReducer(
  initialState,
  on(createUserSuccess, (state, action) => {
    return userAdapter.addOne(action.user, state);
  }),
  on(updateUserSuccess, (state, action) => {
    return userAdapter.updateOne(action.user, state);
  }),
  on(deleteUserSuccess, (state, action) => {
    return userAdapter.removeOne(action.id, state);
  }),
  on(readUsersSuccess, (state, action) => {
    return userAdapter.setAll(action.users, { ...state, loaded: true });
  })
);
