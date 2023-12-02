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
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, HomeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements DoCheck {
  constructor() {
    effect(() => {
      console.log('count changed', this.count());
    });
  }

  title = 'angular-sample-app';

  hoge = 0;

  readonly count = signal(0);
  readonly doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update((value) => value + 1);
  }

  onHogeIncrement() {
    this.hoge++;
  }

  set3() {
    this.count.set(3);
  }

  ngDoCheck(): void {
    console.log('AppComponent ngDoCheck');
  }
}
