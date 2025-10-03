import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const createUser = createAction(
  '[users] create user',
  props<{ user: User }>()
);
export const createUserSuccess = createAction(
  '[users] create user success',
  props<{ user: User }>()
);

export const readUsers = createAction('[users] read users');
export const readUsersSuccess = createAction(
  '[users] read users success',
  props<{ users: User[] }>()
);

export const updateUser = createAction(
  '[users]update user',
  props<{ user: User }>()
);
export const updateUserSuccess = createAction(
  '[users] update user success',
  props<{ user: Update<User> }>()
);

export const deleteUser = createAction(
  '[users] delete user',
  props<{ id: string }>()
);
export const deleteUserSuccess = createAction(
  '[users] delete user success',
  props<{ id: string }>()
);
