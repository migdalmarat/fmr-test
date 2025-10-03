import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createUser,
  createUserSuccess,
  deleteUser,
  deleteUserSuccess,
  readUsers,
  readUsersSuccess,
  updateUser,
  updateUserSuccess,
} from './users.actions';
import {
  catchError,
  filter,
  map,
  mergeMap,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { UserService } from '../servises/user.service';
import { User } from '../../models/user.model';
import { setErrorMessage, setIsLoading } from 'src/app/shared/shared.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { Update } from '@ngrx/entity';
import { selectUsersLoaded } from './users.selectors';

@Injectable()
export class UsersEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createUser),
      mergeMap((action) => {
        this.store.dispatch(setIsLoading({ value: true }));
        return this.userService.createUser(action.user).pipe(
          map((data) => {
            this.store.dispatch(setIsLoading({ value: false }));
            const user: User = { ...action.user, id: data.name };
            return createUserSuccess({ user });
          }),
          catchError((error) => {
            this.store.dispatch(setIsLoading({ value: false }));
            const message = 'Something went wrong. User cannot be created.';
            return of(setErrorMessage({ message }));
          })
        );
      })
    );
  });

  readUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(readUsers),
      withLatestFrom(this.store.select(selectUsersLoaded)), //[actions, loaded]
      filter(([_, loaded]) => !loaded),
      switchMap((action) => {
        this.store.dispatch(setIsLoading({ value: true }));
        return this.userService.readUsers().pipe(
          map((data) => {
            this.store.dispatch(setIsLoading({ value: false }));
            return readUsersSuccess({ users: data });
          }),
          catchError((error) => {
            this.store.dispatch(setIsLoading({ value: false }));
            const message = 'Something went wrong. Cannot fetch all users.';
            return of(setErrorMessage({ message }));
          })
        );
      })
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUser),
      mergeMap((action) => {
        return this.userService.updateUser(action.user).pipe(
          map((data) => {
            const updatedUser: Update<User> = {
              id: action.user.id,
              changes: { ...action.user },
            };
            return updateUserSuccess({ user: updatedUser });
          }),
          catchError((error) => {
            this.store.dispatch(setIsLoading({ value: false }));
            const message = 'Something went wrong. Cannot update the user.';
            return of(setErrorMessage({ message }));
          })
        );
      })
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUser),
      mergeMap((action) => {
        return this.userService.deleteUser(action.id).pipe(
          map((data) => {
            return deleteUserSuccess({ id: action.id });
          }),
          catchError((error) => {
            this.store.dispatch(setIsLoading({ value: false }));
            const message = 'Something went wrong. Cannot delete the user.';
            return of(setErrorMessage({ message }));
          })
        );
      })
    );
  });

  // getUserById$ = createEffect(() => {
  //     return this.actions$.pipe(
  //         ofType(ROUTER_NAVIGATED),
  //         filter((r: RouterNavigatedAction) => {
  //             return r.payload.routerState.url.startsWith('/users/user/')
  //         }),
  //         map((r: RouterNavigatedAction) => {
  //             return r.payload.routerState['params']['id'];
  //         }),
  //         switchMap((id) => {
  //             return this.userService.getUserById(id)
  //                 .pipe(
  //                     map((user) => {
  //                         const userData: User = { ...user, id}
  //                         return createUserSuccess({ user: userData})
  //                     })
  //                 );
  //         })
  //     )
  // })
}
