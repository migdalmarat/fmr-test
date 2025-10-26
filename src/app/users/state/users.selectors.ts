import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UsersState } from './users.state';
import { USERS_STATE } from '../../constants';
import {
  getQueryParams,
  getRouterParams,
} from '../../store/router/router.selector';
import { Params } from '@angular/router';

export const selectUsersState = createFeatureSelector<UsersState>(USERS_STATE);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  userAdapter.getSelectors(selectUsersState);

export const selectUsers = selectAll;

export const selectUsersEntities = selectEntities;


export const selectSelectedUserId = createSelector(selectUsersState, (state) => {
  return state.selectedUserId;
});
export const selectShowForm = createSelector(selectUsersState, (state) => {
  return state.showForm;
});

export const selectUserByIdParams = createSelector(
  selectUsersState,
  getRouterParams,
  (state, params: Params) => {
    return selectAll(state).find((user) => user.id === params['id']);
  }
);

export const getUserByIdQueryParams = createSelector(
  selectUsersState,
  getQueryParams,
  (state, params: Params) => {
    return selectAll(state).find((user) => user.id === params['id']);
  }
);

export const selectUsersLoaded = createSelector(selectUsersState, (state) => {
  return state.loaded;
});
