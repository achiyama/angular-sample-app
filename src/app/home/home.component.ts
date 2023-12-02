import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RoomComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements DoCheck {
  @Input() num: number = 0;

  value = 'Hello, angular-sample-app';

  ngDoCheck(): void {
    console.log(`HomeComponent ngDoCheck: ${this.num}`);
  }
}
