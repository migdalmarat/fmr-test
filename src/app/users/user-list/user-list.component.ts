import { Component, inject, signal } from '@angular/core';
import { UserService } from '../servises/user.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  pageTitle = 'Users';
  errorMessage = '';

  userService = inject(UserService);

  onSelected(vehicleName: string): void {}
}
