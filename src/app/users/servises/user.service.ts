import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { delay, map, tap } from 'rxjs/operators';
import { Order } from '../../models/order.model';
import { User } from '../../models/user.model';
import users from '../../assets/users.json';
import orders from '../../assets/orders.json';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = users;
  orders = orders;

  readUsers(): Observable<User[]> {
    return of(this.users).pipe(
      delay(1000)
    );
  }

  // getUserDetails(userId: string): Observable<User> {
  //   const user = this.mockUsers.find((u) => u.id === userId);
  //   return of(user!).pipe(
  //     delay(1500),
  //     map((u) => ({ ...u, phone: u.phone || '050-0000000' }))
  //   );
  // }

  // getOrders(): Observable<Order[]> {
  //   return this.http.get<Order[]>(this.mockOrdersUrl).pipe(delay(1000));
  // }
}
