import { createReducer, on } from '@ngrx/store';
import { initialState } from './users.state';
import { userAdapter } from './users.state';
import {
  readUsers,
  createUserSuccess,
  deleteUserSuccess,
  readUsersFail,
  readUsersSuccess,
  showForm,
  updateUserSuccess,
  selectUser,
} from './users.actions';

export const usersReducer = createReducer(
  initialState,
  on(readUsersSuccess, (state, action) => 
     userAdapter.setAll(action.users, { ...state, loaded: true })
  ),
  on(selectUser, (state, action) => {
    return {
      ...state,
      selectedUserId: action.userId,
    };
  }),
  on(createUserSuccess, (state, action) => {
    return userAdapter.addOne(action.user, state);
  }),
  on(updateUserSuccess, (state, action) => {
    return userAdapter.updateOne(action.user, state);
  }),
  on(deleteUserSuccess, (state, action) => {
    return userAdapter.removeOne(action.id, state);
  }),

  on(showForm, (state, action) => {
      return {
          ...state,
          showForm: action.value
      }
  }),
);
