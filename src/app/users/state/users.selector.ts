import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UsersState } from './users.state';
import { USERS_STATE } from '../../constants';
import {
  getQueryParams,
  getRouterParams,
} from 'src/app/store/router/router.selector';
import { Params } from '@angular/router';

const getUsersState = createFeatureSelector<UsersState>(USERS_STATE);

const { selectAll } = userAdapter.getSelectors();

export const getUsers = createSelector(getUsersState, (state) => {
  return selectAll(state);
});

export const getShowForm = createSelector(getUsersState, (state) => {
  return state.showForm;
});

export const getUserByIdParams = createSelector(
  getUsersState,
  getRouterParams,
  (state, params: Params) => {
    return selectAll(state).find((user) => user.id === params['id']);
  }
);

export const getUserByIdQueryParams = createSelector(
  getUsersState,
  getQueryParams,
  (state, params: Params) => {
    return selectAll(state).find((user) => user.id === params['id']);
  }
);

export const selectUsersLoaded = createSelector(getUsersState, (state) => {
  return state.loaded;
});
