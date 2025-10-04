import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../models/user.model';

export const userAdapter = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: sortByName,
});

export interface UsersState extends EntityState<User> {
  showForm: boolean;
  loaded: boolean;
}

export const initialState: UsersState = userAdapter.getInitialState({
  showForm: false,
  loaded: false,
});

export function sortByName(a: User, b: User): number {
  return a.name.localeCompare(b.name);
}
