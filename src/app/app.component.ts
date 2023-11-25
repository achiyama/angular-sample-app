import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, HomeComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {
    effect(() => {
      console.log('count changed', this.count());
    });
  }
  title = 'angular-sample-app';

  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update((value) => value + 1);
  }

  set3() {
    this.count.set(3);
  }
}
