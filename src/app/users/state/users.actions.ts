import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';


export const readUsers = createAction('[users] read users');
export const readUsersSuccess = createAction(
  '[users] read users success',
  props<{ users: User[] }>()
);
export const readUsersFail = createAction(
  '[users] read users fail', props<{ error: any }>()
);

export const selectUser = createAction(
  '[users] select user',
  props<{ userId: number }>()
);

export const createUser = createAction(
  '[users] create user',
  props<{ user: User }>()
);
export const createUserSuccess = createAction(
  '[users] create user success',
  props<{ user: User }>()
);
export const createUserFail = createAction(
  '[users] create user fail', props<{ error: any }>()
);

export const updateUser = createAction(
  '[users]update user',
  props<{ user: User }>()
);
export const updateUserSuccess = createAction(
  '[users] update user success',
  props<{ user: Update<User> }>()
);
export const updateUserFail = createAction(
  '[users] update user fail', props<{ error: any }>()
);

export const deleteUser = createAction(
  '[users] delete user',
  props<{ id: string }>()
);
export const deleteUserSuccess = createAction(
  '[users] delete user success',
  props<{ id: string }>()
);
export const deleteUserFail = createAction(
  '[users] delete user fail', props<{ error: any }>()
);

export const showForm = createAction(
  '[users] show form',
  props<{ value: boolean }>()
);
