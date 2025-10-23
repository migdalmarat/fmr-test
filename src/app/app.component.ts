import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { getIsLoading } from './shared/shared.selector';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LoaderComponent, AsyncPipe, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AppComponent {
  private store: Store<AppState> = inject(Store<AppState>);
  showLoading$: Observable<boolean> = this.store.select(getIsLoading);
}
