import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectUser } from '../state/users.actions';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { selectSelectedUserId } from '../state/users.selectors';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [CommonModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();
  store: Store<AppState> = inject(Store);
  router = inject(Router);
  selectedUserId$ = this.store.select(selectSelectedUserId);

  onSelected(userID: number): void {
    this.store.dispatch(selectUser({ userId: userID }));
    this.router.navigate(['/users', userID]);
  }
}
