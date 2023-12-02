import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('RoomComponent ngDoCheck');
  }
}
