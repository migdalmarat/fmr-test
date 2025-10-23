import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../models/user.model';

export const userAdapter = createEntityAdapter<User>({
  selectId: selectUserId,
  sortComparer: sortByName,
});

export interface UsersState extends EntityState<User> {
  selectedUserId: number | null;
  showForm: boolean;
  loaded: boolean;
}

export const initialState: UsersState = userAdapter.getInitialState({
  selectedUserId: null,
  showForm: false,
  loaded: false,
});

export function selectUserId(a: User): number {
  return a.id;
}

export function sortByName(a: User, b: User): number {
  return a.name.localeCompare(b.name);
}
