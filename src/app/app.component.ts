import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LoaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fmr-test';

  showLoading$: Observable<boolean> | undefined;

  // store: Store<AppState> = inject(Store<AppState>);

  ngOnInit(): void {
    // this.showLoading$ = this.store.select(getIsLoading);
  }
}
